import importlib
from types import SimpleNamespace
from unittest.mock import patch

from data_manager.managers import apply_filters
from data_manager.models import View
from data_manager.prepare_params import ConjunctionEnum, Filter, Filters
from django.apps import apps
from django.test import TestCase
from django.utils import timezone
from labels_manager.models import Label, LabelLink
from organizations.models import OrganizationMember
from projects.models import Project, ProjectMember, ProjectMemberRole
from projects.tests.factories import ProjectFactory
from rest_framework.test import APITestCase
from tasks.models import Annotation, AnnotationDraft, Task
from tasks.tests.factories import AnnotationDraftFactory, AnnotationFactory, PredictionFactory, TaskFactory
from users.tests.factories import UserFactory
from webhooks.models import Webhook


class ProjectMembershipAPITest(APITestCase):
    @classmethod
    def setUpTestData(cls):
        cls.project = ProjectFactory()
        cls.admin = cls.project.created_by
        cls.annotator = UserFactory(active_organization=cls.project.organization)
        cls.other_member = UserFactory(active_organization=cls.project.organization)
        cls.nonmember = UserFactory(active_organization=cls.project.organization)
        ProjectMember.objects.create(
            project=cls.project,
            user=cls.annotator,
            role=ProjectMemberRole.ANNOTATOR,
        )

    def test_project_creator_is_admin_and_nonmember_cannot_see_project(self):
        creator_membership = ProjectMember.objects.get(project=self.project, user=self.admin)
        assert creator_membership.role == ProjectMemberRole.ADMIN
        assert creator_membership.enabled is True

        self.client.force_authenticate(self.nonmember)
        response = self.client.get(f'/api/projects/{self.project.id}')
        assert response.status_code == 404

        response = self.client.get('/api/projects')
        assert response.status_code == 200
        assert response.json()['count'] == 0

        self.client.force_authenticate(self.annotator)
        response = self.client.get(f'/api/projects/{self.project.id}')
        assert response.status_code == 200
        payload = response.json()
        assert payload['current_user_role'] == ProjectMemberRole.ANNOTATOR
        assert payload['capabilities']['view_all_annotations'] is False
        assert 'task_data_login' not in payload
        assert 'task_data_password' not in payload

    def test_only_admin_can_view_or_manage_project_members(self):
        members_url = f'/api/projects/{self.project.id}/members/'
        candidates_url = f'/api/projects/{self.project.id}/members/candidates/'

        self.client.force_authenticate(self.annotator)
        annotator_membership = ProjectMember.objects.get(project=self.project, user=self.annotator)
        assert self.client.get(members_url).status_code == 403
        assert self.client.get(candidates_url).status_code == 403
        assert (
            self.client.post(
                members_url,
                {'user_ids': [self.other_member.id], 'role': ProjectMemberRole.ADMIN},
                format='json',
            ).status_code
            == 403
        )
        assert (
            self.client.patch(
                f'{members_url}{annotator_membership.id}/',
                {'role': ProjectMemberRole.ADMIN},
                format='json',
            ).status_code
            == 403
        )
        assert self.client.delete(f'{members_url}{annotator_membership.id}/').status_code == 403
        response = self.client.post(
            members_url,
            {'email': self.other_member.email},
            format='json',
        )
        assert response.status_code == 403
        assert not ProjectMember.objects.filter(project=self.project, user=self.other_member).exists()

        self.client.force_authenticate(self.admin)
        response = self.client.post(
            members_url,
            {'email': self.other_member.email},
            format='json',
        )
        assert response.status_code == 201
        membership_id = response.json()['id']
        assert response.json()['role'] == ProjectMemberRole.ANNOTATOR

        response = self.client.patch(
            f'{members_url}{membership_id}/',
            {'role': ProjectMemberRole.ADMIN},
            format='json',
        )
        assert response.status_code == 200
        assert response.json()['role'] == ProjectMemberRole.ADMIN

    def test_admin_can_bulk_add_members_with_one_role(self):
        first_user = UserFactory(active_organization=self.project.organization)
        second_user = UserFactory(active_organization=self.project.organization)
        self.client.force_authenticate(self.admin)

        response = self.client.post(
            f'/api/projects/{self.project.id}/members/',
            {
                'user_ids': [first_user.id, second_user.id],
                'role': ProjectMemberRole.ADMIN,
            },
            format='json',
        )

        assert response.status_code == 201
        assert {item['user']['id'] for item in response.json()} == {first_user.id, second_user.id}
        assert {item['role'] for item in response.json()} == {ProjectMemberRole.ADMIN}
        assert (
            ProjectMember.objects.filter(
                project=self.project,
                user__in=[first_user, second_user],
                role=ProjectMemberRole.ADMIN,
                enabled=True,
            ).count()
            == 2
        )

    def test_bulk_add_rejects_an_empty_selection(self):
        self.client.force_authenticate(self.admin)

        response = self.client.post(
            f'/api/projects/{self.project.id}/members/',
            {'user_ids': [], 'role': ProjectMemberRole.ANNOTATOR},
            format='json',
        )

        assert response.status_code == 400

    def test_bulk_add_is_atomic_when_one_account_is_already_a_member(self):
        new_user = UserFactory(active_organization=self.project.organization)
        self.client.force_authenticate(self.admin)

        response = self.client.post(
            f'/api/projects/{self.project.id}/members/',
            {
                'user_ids': [new_user.id, self.annotator.id],
                'role': ProjectMemberRole.ANNOTATOR,
            },
            format='json',
        )

        assert response.status_code == 400
        assert not ProjectMember.objects.filter(project=self.project, user=new_user).exists()

    def test_bulk_add_rolls_back_when_a_later_write_fails(self):
        first_user = UserFactory(active_organization=self.project.organization)
        second_user = UserFactory(active_organization=self.project.organization)
        self.client.force_authenticate(self.admin)
        membership_manager = ProjectMember.objects
        update_or_create = membership_manager.update_or_create
        call_count = 0

        def fail_second_write(*args, **kwargs):
            nonlocal call_count
            call_count += 1
            if call_count == 2:
                raise RuntimeError('simulated write failure')
            return update_or_create(*args, **kwargs)

        with patch.object(membership_manager, 'update_or_create', side_effect=fail_second_write):
            response = self.client.post(
                f'/api/projects/{self.project.id}/members/',
                {
                    'user_ids': [first_user.id, second_user.id],
                    'role': ProjectMemberRole.ANNOTATOR,
                },
                format='json',
            )

        assert response.status_code == 500

        assert not ProjectMember.objects.filter(project=self.project, user__in=[first_user, second_user]).exists()

    def test_bulk_add_does_not_reveal_accounts_outside_the_organization(self):
        outside_user = UserFactory()
        self.client.force_authenticate(self.admin)
        responses = [
            self.client.post(
                f'/api/projects/{self.project.id}/members/',
                {'user_ids': [user_id], 'role': ProjectMemberRole.ANNOTATOR},
                format='json',
            )
            for user_id in (outside_user.id, outside_user.id + 1_000_000)
        ]

        assert [response.status_code for response in responses] == [400, 400]
        payloads = [{key: value for key, value in response.json().items() if key != 'id'} for response in responses]
        assert payloads[0] == payloads[1]

    def test_admin_can_search_eligible_organization_members(self):
        matching_user = UserFactory(
            active_organization=self.project.organization,
            first_name='Membership',
            last_name='Needle',
            username='searchable-handle',
        )
        UserFactory(active_organization=self.project.organization, first_name='DifferentAccount')
        inactive_user = UserFactory(
            active_organization=self.project.organization,
            first_name='Membership',
            last_name='NeedleInactive',
            is_active=False,
        )
        self.client.force_authenticate(self.admin)

        response = self.client.get(f'/api/projects/{self.project.id}/members/candidates/?search=Membership%20Needle')

        assert response.status_code == 200
        assert [item['id'] for item in response.json()] == [matching_user.id]
        assert inactive_user.id not in {item['id'] for item in response.json()}
        assert self.annotator.id not in {item['id'] for item in response.json()}

        response = self.client.get(f'/api/projects/{self.project.id}/members/candidates/?search=searchable-handle')
        assert [item['id'] for item in response.json()] == [matching_user.id]

    def test_last_admin_cannot_be_demoted_or_removed(self):
        membership = ProjectMember.objects.get(project=self.project, user=self.admin)
        self.client.force_authenticate(self.admin)

        response = self.client.patch(
            f'/api/projects/{self.project.id}/members/{membership.id}/',
            {'role': ProjectMemberRole.ANNOTATOR},
            format='json',
        )
        assert response.status_code == 400

        response = self.client.delete(f'/api/projects/{self.project.id}/members/{membership.id}/')
        assert response.status_code == 400

    def test_inactive_admin_does_not_satisfy_last_admin_protection(self):
        inactive_admin = UserFactory(active_organization=self.project.organization, is_active=False)
        ProjectMember.objects.create(
            project=self.project,
            user=inactive_admin,
            role=ProjectMemberRole.ADMIN,
        )
        membership = ProjectMember.objects.get(project=self.project, user=self.admin)
        self.client.force_authenticate(self.admin)

        response = self.client.patch(
            f'/api/projects/{self.project.id}/members/{membership.id}/',
            {'role': ProjectMemberRole.ANNOTATOR},
            format='json',
        )

        assert response.status_code == 400

    def test_deactivating_admin_revokes_membership_and_promotes_active_member(self):
        project = ProjectFactory()
        replacement = UserFactory(active_organization=project.organization)
        replacement_membership = ProjectMember.objects.create(project=project, user=replacement)
        departing_admin = project.created_by

        departing_admin.is_active = False
        departing_admin.save(update_fields=['is_active'])

        departing_membership = ProjectMember.objects.get(project=project, user=departing_admin)
        replacement_membership.refresh_from_db()
        assert departing_membership.enabled is False
        assert replacement_membership.role == ProjectMemberRole.ADMIN

    def test_admin_offboarding_skips_inactive_replacement(self):
        project = ProjectFactory()
        inactive_user = UserFactory(active_organization=project.organization, is_active=False)
        inactive_membership = ProjectMember.objects.create(project=project, user=inactive_user)
        active_user = UserFactory(active_organization=project.organization)
        active_membership = ProjectMember.objects.create(project=project, user=active_user)

        OrganizationMember.objects.get(
            organization=project.organization,
            user=project.created_by,
            deleted_at__isnull=True,
        ).soft_delete()

        inactive_membership.refresh_from_db()
        active_membership.refresh_from_db()
        assert inactive_membership.role == ProjectMemberRole.ANNOTATOR
        assert active_membership.role == ProjectMemberRole.ADMIN

    def test_admin_offboarding_promotes_an_enabled_member(self):
        project = ProjectFactory()
        replacement = UserFactory(active_organization=project.organization)
        replacement_membership = ProjectMember.objects.create(
            project=project,
            user=replacement,
            role=ProjectMemberRole.ANNOTATOR,
        )

        OrganizationMember.objects.get(
            organization=project.organization,
            user=project.created_by,
            deleted_at__isnull=True,
        ).soft_delete()

        creator_membership = ProjectMember.objects.get(project=project, user=project.created_by)
        replacement_membership.refresh_from_db()
        assert creator_membership.enabled is False
        assert replacement_membership.role == ProjectMemberRole.ADMIN

    def test_hard_organization_removal_revokes_membership_and_promotes_admin(self):
        project = ProjectFactory()
        departing_admin = project.created_by
        replacement = UserFactory(active_organization=project.organization)
        replacement_membership = ProjectMember.objects.create(project=project, user=replacement)

        project.organization.remove_user(departing_admin)

        creator_membership = ProjectMember.objects.get(project=project, user=departing_admin)
        replacement_membership.refresh_from_db()
        assert creator_membership.enabled is False
        assert replacement_membership.role == ProjectMemberRole.ADMIN
        assert not project.organization.has_user(departing_admin)

    def test_offboarded_admin_does_not_satisfy_last_admin_protection(self):
        offboarded_admin = UserFactory(active_organization=self.project.organization)
        stale_membership = ProjectMember.objects.create(
            project=self.project,
            user=offboarded_admin,
            role=ProjectMemberRole.ADMIN,
        )
        OrganizationMember.objects.get(
            organization=self.project.organization,
            user=offboarded_admin,
            deleted_at__isnull=True,
        ).soft_delete()
        ProjectMember.objects.filter(pk=stale_membership.pk).update(enabled=True)

        current_admin = ProjectMember.objects.get(project=self.project, user=self.admin)
        self.client.force_authenticate(self.admin)
        response = self.client.patch(
            f'/api/projects/{self.project.id}/members/{current_admin.id}/',
            {'role': ProjectMemberRole.ANNOTATOR},
            format='json',
        )
        assert response.status_code == 400

    def test_disabled_membership_removes_all_project_access(self):
        ProjectMember.objects.filter(project=self.project, user=self.annotator).update(enabled=False)

        assert not self.project.has_permission(self.annotator)
        assert not self.project.annotators().filter(pk=self.annotator.pk).exists()
        assert not Project.objects.for_user(self.annotator).filter(pk=self.project.pk).exists()

        self.client.force_authenticate(self.annotator)
        response = self.client.get(f'/api/projects/{self.project.id}')
        assert response.status_code == 404


class ProjectRoleVisibilityAPITest(APITestCase):
    @classmethod
    def setUpTestData(cls):
        cls.project = ProjectFactory()
        cls.admin = cls.project.created_by
        cls.annotator = UserFactory(active_organization=cls.project.organization)
        cls.second_annotator = UserFactory(active_organization=cls.project.organization)
        ProjectMember.objects.create(
            project=cls.project,
            user=cls.annotator,
            role=ProjectMemberRole.ANNOTATOR,
        )
        ProjectMember.objects.create(
            project=cls.project,
            user=cls.second_annotator,
            role=ProjectMemberRole.ANNOTATOR,
        )
        cls.task = TaskFactory(project=cls.project)
        cls.own_annotation = AnnotationFactory(
            task=cls.task,
            project=cls.project,
            completed_by=cls.annotator,
        )
        cls.other_annotation = AnnotationFactory(
            task=cls.task,
            project=cls.project,
            completed_by=cls.second_annotator,
        )
        cls.own_draft = AnnotationDraftFactory(task=cls.task, user=cls.annotator)
        cls.other_draft = AnnotationDraftFactory(task=cls.task, user=cls.second_annotator)
        cls.admin_view = View.objects.create(project=cls.project, user=cls.admin)
        cls.own_view = View.objects.create(project=cls.project, user=cls.annotator)
        cls.other_view = View.objects.create(project=cls.project, user=cls.second_annotator)

    def test_annotation_manager_and_api_are_role_aware(self):
        assert set(Annotation.objects.for_user(self.admin).values_list('id', flat=True)) == {
            self.own_annotation.id,
            self.other_annotation.id,
        }
        assert list(Annotation.objects.for_user(self.annotator).values_list('id', flat=True)) == [
            self.own_annotation.id
        ]

        self.client.force_authenticate(self.annotator)
        response = self.client.get(f'/api/annotations/{self.other_annotation.id}/')
        assert response.status_code == 404
        response = self.client.get(f'/api/annotations/{self.own_annotation.id}/')
        assert response.status_code == 200

        response = self.client.get(f'/api/tasks/{self.task.id}/annotations/')
        assert response.status_code == 200
        payload = response.json()
        annotations = payload.get('results', payload) if isinstance(payload, dict) else payload
        assert [annotation['id'] for annotation in annotations] == [self.own_annotation.id]

        response = self.client.get(f'/api/tasks/{self.task.id}/?project={self.project.id}')
        assert response.status_code == 200
        assert [annotation['id'] for annotation in response.json()['annotations']] == [self.own_annotation.id]
        assert [draft['id'] for draft in response.json()['drafts']] == [self.own_draft.id]

        self.client.force_authenticate(self.admin)
        response = self.client.get(f'/api/annotations/{self.other_annotation.id}/')
        assert response.status_code == 200
        response = self.client.get(f'/api/tasks/{self.task.id}/?project={self.project.id}')
        assert response.status_code == 200
        assert {draft['id'] for draft in response.json()['drafts']} == {
            self.own_draft.id,
            self.other_draft.id,
        }

    def test_annotation_filters_do_not_reveal_other_annotators(self):
        self.other_annotation.result = [{'value': 'private-result'}]
        self.other_annotation.save(update_fields=['result'])
        filter_specs = [
            ('annotations_results', 'private-result'),
            ('annotations_ids', str(self.other_annotation.id)),
            ('annotators', str(self.second_annotator.id)),
        ]

        for field_name, value in filter_specs:
            filters = Filters(
                conjunction=ConjunctionEnum.AND,
                items=[
                    Filter(
                        filter=f'filter:tasks:{field_name}',
                        operator='contains',
                        type='String',
                        value=value,
                    )
                ],
            )
            annotator_tasks = apply_filters(
                Task.objects.for_user(self.annotator).filter(project=self.project),
                filters,
                self.project,
                SimpleNamespace(user=self.annotator),
            )
            assert not annotator_tasks.filter(pk=self.task.pk).exists()

            admin_tasks = apply_filters(
                Task.objects.for_user(self.admin).filter(project=self.project),
                filters,
                self.project,
                SimpleNamespace(user=self.admin),
            )
            assert admin_tasks.filter(pk=self.task.pk).exists()

    def test_annotator_cannot_rebind_or_cross_link_draft(self):
        other_project = ProjectFactory()
        other_task = TaskFactory(project=other_project)
        self.client.force_authenticate(self.annotator)

        response = self.client.patch(
            f'/api/drafts/{self.own_draft.id}/',
            {'task': other_task.id, 'annotation': self.other_annotation.id},
            format='json',
        )
        assert response.status_code == 400
        self.own_draft.refresh_from_db()
        assert self.own_draft.task_id == self.task.id
        assert self.own_draft.annotation_id is None

        response = self.client.post(
            f'/api/tasks/{self.task.id}/annotations/{self.other_annotation.id}/drafts',
            {'result': []},
            format='json',
        )
        assert response.status_code == 404

    def test_annotator_cannot_include_live_models_in_project_versions(self):
        self.client.force_authenticate(self.annotator)
        response = self.client.get(
            f'/api/projects/{self.project.id}/model-versions/?extended=true&include_live_models=true'
        )
        assert response.status_code == 403

    def test_annotator_cannot_create_or_promote_ground_truth(self):
        self.other_annotation.ground_truth = True
        self.other_annotation.save(update_fields=['ground_truth'])
        self.client.force_authenticate(self.annotator)

        response = self.client.patch(
            f'/api/annotations/{self.own_annotation.id}/',
            {'ground_truth': True},
            format='json',
        )
        assert response.status_code == 403

        response = self.client.post(
            f'/api/tasks/{self.task.id}/annotations/',
            {'result': [], 'ground_truth': True},
            format='json',
        )
        assert response.status_code == 403

        self.own_annotation.refresh_from_db()
        self.other_annotation.refresh_from_db()
        assert self.own_annotation.ground_truth is False
        assert self.other_annotation.ground_truth is True
        assert Annotation.objects.filter(task=self.task).count() == 2

    def test_annotator_cannot_mutate_predictions(self):
        prediction = PredictionFactory(task=self.task, project=self.project)
        self.client.force_authenticate(self.annotator)

        response = self.client.patch(
            f'/api/predictions/{prediction.id}/',
            {'score': 0.5},
            format='json',
        )
        assert response.status_code == 403

        response = self.client.delete(f'/api/predictions/{prediction.id}/')
        assert response.status_code == 403

        response = self.client.delete(
            f'/api/projects/{self.project.id}/model-versions/',
            {'model_version': prediction.model_version},
            format='json',
        )
        assert response.status_code == 403
        assert prediction.__class__.objects.filter(pk=prediction.pk).exists()

    def test_prediction_project_must_match_task_project(self):
        other_project = ProjectFactory()
        other_task = TaskFactory(project=other_project)
        self.client.force_authenticate(self.admin)

        response = self.client.post(
            '/api/predictions/',
            {'task': other_task.id, 'project': self.project.id, 'result': []},
            format='json',
        )
        assert response.status_code == 400

    def test_shared_label_cannot_be_mutated_through_one_admin_project(self):
        other_project = ProjectFactory(
            organization=self.project.organization,
            created_by=self.second_annotator,
        )
        label = Label.objects.create(
            organization=self.project.organization,
            created_by=self.admin,
            title='shared-label',
            value='original',
        )
        LabelLink.objects.create(project=self.project, label=label, from_name='choice')
        LabelLink.objects.create(project=other_project, label=label, from_name='choice')
        self.client.force_authenticate(self.admin)

        response = self.client.patch(
            f'/api/labels/{label.id}/',
            {'value': 'changed'},
            format='json',
        )
        assert response.status_code == 404
        label.refresh_from_db()
        assert label.value == 'original'

    def test_label_link_rejects_cross_organization_label(self):
        other_project = ProjectFactory()
        label = Label.objects.create(
            organization=other_project.organization,
            created_by=other_project.created_by,
            title='other-organization-label',
            value='other',
        )
        self.client.force_authenticate(self.admin)

        response = self.client.post(
            '/api/label_links/',
            {'project': self.project.id, 'label': label.id, 'from_name': 'choice'},
            format='json',
        )
        assert response.status_code == 400
        assert not LabelLink.objects.filter(project=self.project, label=label).exists()

    def test_annotator_sees_only_own_tab_while_admin_sees_all_tabs(self):
        self.client.force_authenticate(self.annotator)
        response = self.client.get(f'/api/dm/views?project={self.project.id}')
        assert response.status_code == 200
        assert [view['id'] for view in response.json()] == [self.own_view.id]

        self.client.force_authenticate(self.admin)
        response = self.client.get(f'/api/dm/views?project={self.project.id}')
        assert response.status_code == 200
        assert {view['id'] for view in response.json()} == {
            self.admin_view.id,
            self.own_view.id,
            self.other_view.id,
        }

    def test_annotator_cannot_transfer_tab_ownership(self):
        self.client.force_authenticate(self.annotator)
        response = self.client.patch(
            f'/api/dm/views/{self.own_view.id}/',
            {'user': self.second_annotator.id},
            format='json',
        )
        assert response.status_code == 200
        self.own_view.refresh_from_db()
        assert self.own_view.user_id == self.annotator.id

    def test_tab_data_update_is_persisted(self):
        self.client.force_authenticate(self.annotator)
        response = self.client.patch(
            f'/api/dm/views/{self.own_view.id}/',
            {'data': {'hiddenColumns': ['completed_at']}},
            format='json',
        )
        assert response.status_code == 200

        self.own_view.refresh_from_db()
        assert self.own_view.data == {'hiddenColumns': ['completed_at']}

    def test_annotator_cannot_import_or_access_admin_integrations(self):
        self.client.force_authenticate(self.annotator)

        response = self.client.post(
            f'/api/projects/{self.project.id}/import',
            [{'data': {'text': 'not allowed'}}],
            format='json',
        )
        assert response.status_code == 403

        response = self.client.get(f'/api/storages/s3/?project={self.project.id}')
        assert response.status_code == 403

        response = self.client.post(
            '/api/webhooks/',
            {'project': self.project.id, 'url': 'https://example.com/hook'},
            format='json',
        )
        assert response.status_code == 404
        assert not Webhook.objects.filter(project=self.project).exists()

    def test_soft_deleted_organization_membership_revokes_project_access(self):
        organization_membership = OrganizationMember.objects.get(
            organization=self.project.organization,
            user=self.annotator,
            deleted_at__isnull=True,
        )
        organization_membership.soft_delete()

        assert not self.project.has_permission(self.annotator)
        assert not Project.objects.for_user(self.annotator).filter(pk=self.project.pk).exists()
        assert not Task.objects.for_user(self.annotator).filter(pk=self.task.pk).exists()
        assert not Annotation.objects.for_user(self.annotator).filter(pk=self.own_annotation.pk).exists()
        assert not AnnotationDraft.objects.for_user(self.annotator).filter(pk=self.own_draft.pk).exists()

        self.client.force_authenticate(self.annotator)
        response = self.client.get(f'/api/projects/{self.project.id}')
        assert response.status_code == 404
        response = self.client.get(f'/api/tasks/{self.task.id}/?project={self.project.id}')
        assert response.status_code == 404
        response = self.client.get(f'/api/annotations/{self.own_annotation.id}/')
        assert response.status_code == 404
        response = self.client.post(
            f'/api/projects/{self.project.id}/import',
            [{'data': {'text': 'not allowed'}}],
            format='json',
        )
        assert response.status_code in (403, 404)

    def test_organization_webhooks_remain_available(self):
        self.client.force_authenticate(self.admin)
        response = self.client.post(
            '/api/webhooks/',
            {'url': 'https://example.com/organization-hook'},
            format='json',
        )
        assert response.status_code == 201
        assert response.json()['project'] is None

        response = self.client.get(f'/api/webhooks/{response.json()["id"]}/')
        assert response.status_code == 200

    @patch('ml.models.MLBackend.healthcheck_')
    def test_annotator_is_rejected_before_ml_backend_validation(self, healthcheck):
        self.client.force_authenticate(self.annotator)
        response = self.client.post(
            '/api/ml/',
            {'project': self.project.id, 'url': 'https://example.com/ml'},
            format='json',
        )
        assert response.status_code == 403
        healthcheck.assert_not_called()


class ProjectMembershipBackfillTest(TestCase):
    migration = importlib.import_module('projects.migrations.0035_projectmember_role')

    def test_disabled_creator_stays_disabled_and_enabled_member_becomes_admin(self):
        project = ProjectFactory()
        creator_membership = ProjectMember.objects.get(project=project, user=project.created_by)
        creator_membership.role = ProjectMemberRole.ANNOTATOR
        creator_membership.enabled = False
        creator_membership.save(update_fields=['role', 'enabled'])
        replacement = UserFactory(active_organization=project.organization)
        replacement_membership = ProjectMember.objects.create(project=project, user=replacement)

        self.migration.backfill_project_memberships(apps, None)

        creator_membership.refresh_from_db()
        replacement_membership.refresh_from_db()
        assert creator_membership.role == ProjectMemberRole.ADMIN
        assert creator_membership.enabled is False
        assert replacement_membership.role == ProjectMemberRole.ADMIN

    def test_offboarded_admin_does_not_block_migration_promotion(self):
        project = ProjectFactory()
        replacement = UserFactory(active_organization=project.organization)
        replacement_membership = ProjectMember.objects.create(project=project, user=replacement)
        OrganizationMember.objects.filter(
            organization=project.organization,
            user=project.created_by,
        ).update(deleted_at=timezone.now())

        self.migration.backfill_project_memberships(apps, None)

        replacement_membership.refresh_from_db()
        assert replacement_membership.role == ProjectMemberRole.ADMIN

    def test_inactive_admin_does_not_block_migration_promotion(self):
        project = ProjectFactory()
        project.created_by.__class__.objects.filter(pk=project.created_by_id).update(is_active=False)
        replacement = UserFactory(active_organization=project.organization)
        replacement_membership = ProjectMember.objects.create(project=project, user=replacement)

        self.migration.backfill_project_memberships(apps, None)

        replacement_membership.refresh_from_db()
        assert replacement_membership.role == ProjectMemberRole.ADMIN

    def test_project_without_creator_promotes_oldest_enabled_member(self):
        project = ProjectFactory()
        ProjectMember.objects.filter(project=project).delete()
        project.created_by = None
        project.save(update_fields=['created_by'])
        member = UserFactory(active_organization=project.organization)
        membership = ProjectMember.objects.create(project=project, user=member)

        self.migration.backfill_project_memberships(apps, None)

        membership.refresh_from_db()
        assert membership.role == ProjectMemberRole.ADMIN
