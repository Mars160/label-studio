from django.db import migrations, models


def backfill_project_memberships(apps, schema_editor):
    OrganizationMember = apps.get_model('organizations', 'OrganizationMember')
    Project = apps.get_model('projects', 'Project')
    ProjectMember = apps.get_model('projects', 'ProjectMember')
    User = apps.get_model('users', 'User')
    database = schema_editor.connection.alias if schema_editor is not None else 'default'
    active_user_ids = User.objects.using(database).filter(is_active=True).values('id')
    organization_members = OrganizationMember.objects.using(database)
    project_members = ProjectMember.objects.using(database)

    duplicate_groups = (
        project_members.values('project_id', 'user_id')
        .annotate(
            keeper_id=models.Min('id'),
            membership_count=models.Count('id'),
            enabled_count=models.Count('id', filter=models.Q(enabled=True)),
        )
        .filter(membership_count__gt=1)
        .iterator()
    )
    for group in duplicate_groups:
        if group['enabled_count'] > 0:
            project_members.filter(id=group['keeper_id']).update(enabled=True)
        project_members.filter(project_id=group['project_id'], user_id=group['user_id']).exclude(
            id=group['keeper_id']
        ).delete()

    projects = Project.objects.using(database).values_list('id', 'created_by_id', 'organization_id').iterator()
    for project_id, created_by_id, organization_id in projects:
        if created_by_id is not None:
            creator_membership = project_members.filter(project_id=project_id, user_id=created_by_id).first()
            if creator_membership is None:
                project_members.create(
                    project_id=project_id,
                    user_id=created_by_id,
                    role='admin',
                    enabled=True,
                )
            elif creator_membership.role != 'admin':
                project_members.filter(id=creator_membership.id).update(role='admin')

        live_user_ids = organization_members.filter(
            organization_id=organization_id,
            deleted_at__isnull=True,
            user_id__in=active_user_ids,
        ).values('user_id')
        if not project_members.filter(
            project_id=project_id,
            role='admin',
            enabled=True,
            user_id__in=live_user_ids,
        ).exists():
            replacement_admin_id = (
                project_members.filter(project_id=project_id, enabled=True, user_id__in=live_user_ids)
                .order_by('id')
                .values_list('id', flat=True)
                .first()
            )
            if replacement_admin_id is not None:
                project_members.filter(id=replacement_admin_id).update(role='admin')


class Migration(migrations.Migration):
    dependencies = [
        ('projects', '0034_project_annotator_evaluation_enabled'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectmember',
            name='role',
            field=models.CharField(
                choices=[('admin', 'Admin'), ('annotator', 'Annotator')],
                default='annotator',
                help_text='Project role',
                max_length=16,
            ),
        ),
        migrations.RunPython(backfill_project_memberships, migrations.RunPython.noop),
        migrations.AddConstraint(
            model_name='projectmember',
            constraint=models.UniqueConstraint(fields=('project', 'user'), name='unique_project_member'),
        ),
    ]
