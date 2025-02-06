import pytest
from organizations.models import Organization, OrganizationMember
from users.models import User


@pytest.mark.django_db
def test_jwt_settings_permissions():
    user = User.objects.create()
    org = Organization.objects.create(created_by=user)
    OrganizationMember.objects.create(
        user=user,
        organization=org,
    )
    jwt_settings = org.jwt_base
    jwt_settings.enabled = True

    user.is_owner = True
    user.save()
    assert jwt_settings.has_permission(user) is True

    user.is_owner = False
    user.save()
    assert jwt_settings.has_permission(user) is False
