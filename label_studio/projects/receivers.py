from django.db.models.signals import post_save
from django.dispatch import receiver
from projects.models import Project, ProjectMember, ProjectMemberRole


@receiver(post_save, sender=Project, dispatch_uid='projects.ensure_creator_admin_membership')
def ensure_creator_admin_membership(sender, instance, created, **kwargs):
    if not created or not instance.created_by_id:
        return

    ProjectMember.objects.update_or_create(
        project=instance,
        user_id=instance.created_by_id,
        defaults={'role': ProjectMemberRole.ADMIN, 'enabled': True},
    )
