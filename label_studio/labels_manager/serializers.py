from django.conf import settings
from django.db import transaction
from projects.models import Project
from rest_flex_fields import FlexFieldsModelSerializer
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from .models import Label, LabelLink


class LabelListSerializer(serializers.ListSerializer):
    def validate(self, items):
        if len(set(item['project'] for item in items)) > 1:
            raise ValidationError('Creating labels for different projects in one request not allowed')
        return items

    def create(self, validated_data):
        """Bulk creation objects of Label model with related LabelLink
        reusing already existing labels
        """
        from webhooks.utils import emit_webhooks_for_instance

        with transaction.atomic():
            # loading already existing labels
            titles = [item['title'] for item in validated_data]
            existing_labels = Label.objects.filter(
                organization=self.context['request'].user.active_organization, title__in=titles
            ).all()
            existing_labels_map = {label.title: label for label in existing_labels}

            # create objects for labels, that we need to create
            labels_data = []
            labels = []
            labels_create = []
            for item in validated_data:
                project = item.pop('project')
                from_name = item.pop('from_name')
                if item['title'] in existing_labels_map:
                    label = existing_labels_map[item['title']]
                else:
                    label = Label(**item)
                    labels_create.append(label)
                labels.append(label)
                labels_data.append(dict(project=project, from_name=from_name))

            if labels_create:
                if settings.DJANGO_DB == settings.DJANGO_DB_SQLITE:
                    created_labels = {}
                    for label in labels_create:
                        label.save()
                        created_labels[label.title] = label
                else:
                    created_labels = {label.title: label for label in Label.objects.bulk_create(labels_create)}

            # connect existing and created labels to project with LabelLink
            links = []
            result = []
            for index, label in enumerate(labels):
                if label.id is None:
                    label = created_labels[label.title]
                label.project = labels_data[index]['project']
                label.from_name = labels_data[index]['from_name']
                result.append(label)
                links.append(
                    LabelLink(
                        **{
                            'label': label,
                            'project': labels_data[index]['project'],
                            'from_name': labels_data[index]['from_name'],
                        }
                    )
                )

            links = LabelLink.objects.bulk_create(links, ignore_conflicts=True)
            # webhooks processing
            # bulk_create with ignore_conflicts doesn't return ids, reloading links
            project = labels[0].project
            label_ids = [label.id for label in result]
            links = LabelLink.objects.filter(label_id__in=label_ids, project=project).all()
            if links:
                emit_webhooks_for_instance(
                    self.context['request'].user.active_organization, links[0].project, 'LABEL_LINK_CREATED', links
                )

        return result


class LabelCreateSerializer(serializers.ModelSerializer):
    created_by = serializers.PrimaryKeyRelatedField(required=False, read_only=True)
    organization = serializers.PrimaryKeyRelatedField(required=False, read_only=True)
    project = serializers.PrimaryKeyRelatedField(queryset=Project.objects.all())
    from_name = serializers.CharField()

    def validate_project(self, project):
        request = self.context.get('request')
        if (
            request is None
            or project.organization_id != request.user.active_organization_id
            or not project.is_admin(request.user)
        ):
            raise serializers.ValidationError('Only project administrators can manage labels.')
        return project

    class Meta:
        model = Label
        list_serializer_class = LabelListSerializer
        fields = '__all__'


class LabelLinkSerializer(FlexFieldsModelSerializer):
    annotations_count = serializers.IntegerField(read_only=True)

    def validate_project(self, project):
        request = self.context.get('request')
        if (
            request is None
            or project.organization_id != request.user.active_organization_id
            or not project.is_admin(request.user)
        ):
            raise serializers.ValidationError('Only project administrators can manage labels.')
        return project

    def validate(self, attrs):
        project = attrs.get('project', getattr(self.instance, 'project', None))
        label = attrs.get('label', getattr(self.instance, 'label', None))
        if project is not None and label is not None and project.organization_id != label.organization_id:
            raise serializers.ValidationError({'label': 'Label and project must belong to the same organization.'})
        return super().validate(attrs)

    class Meta:
        model = LabelLink
        fields = '__all__'
        expandable_fields = {'label': ('labels_manager.serializers.LabelSerializer', {'omit': ['links', 'projects']})}


class LabelSerializer(FlexFieldsModelSerializer):
    links = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Label
        fields = '__all__'
        expandable_fields = {'links': ('labels_manager.serializers.LabelLinkSerializer', {'many': True})}


class LabelBulkUpdateSerializer(serializers.Serializer):
    project = serializers.PrimaryKeyRelatedField(queryset=Project.objects.all(), required=False, default=None)

    def validate_project(self, project):
        request = self.context.get('request')
        if (
            project is None
            or request is None
            or project.organization_id != request.user.active_organization_id
            or not project.is_admin(request.user)
        ):
            raise serializers.ValidationError('Only project administrators can update annotation labels.')
        return project

    old_label = serializers.JSONField()
    new_label = serializers.JSONField()


class LabelBulkUpdateResponseSerializer(serializers.Serializer):
    annotations_updated = serializers.IntegerField()
