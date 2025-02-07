import pytest
from jwt_auth.models import LSTokenBackend
from organizations.models import Organization, OrganizationMember
from rest_framework_simplejwt.settings import api_settings as simple_jwt_settings
from users.models import User

from ..utils import mock_feature_flag


@pytest.fixture
@pytest.mark.django_db
def test_token_user():
    user = User.objects.create(email='test@example.com')
    org = Organization(created_by=user)
    org.save()
    user.active_organization = org
    user.save()
    yield user



@mock_feature_flag(flag_name="fflag__feature_develop__prompts__dia_1829_jwt_token_auth", value=True)
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

@mock_feature_flag(flag_name="fflag__feature_develop__prompts__dia_1829_jwt_token_auth", value=True)
@pytest.fixture
def token_backend():
    return LSTokenBackend(
        algorithm=simple_jwt_settings.ALGORITHM,
        signing_key=simple_jwt_settings.SIGNING_KEY,
        verifying_key=simple_jwt_settings.VERIFYING_KEY,
        audience=simple_jwt_settings.AUDIENCE,
        issuer=simple_jwt_settings.ISSUER,
        jwk_url=simple_jwt_settings.JWK_URL,
        leeway=simple_jwt_settings.LEEWAY,
        json_encoder=simple_jwt_settings.JSON_ENCODER,
    )


@mock_feature_flag(flag_name="fflag__feature_develop__prompts__dia_1829_jwt_token_auth", value=True)
def test_encode_returns_only_header_and_payload(token_backend):
    payload = {
        'user_id': 123,
        'exp': 1735689600,  # 2025-01-01
        'iat': 1704153600,  # 2024-01-02
    }
    token = token_backend.encode(payload)

    parts = token.split('.')
    assert len(parts) == 2

    assert all(part.replace('-', '+').replace('_', '/') for part in parts)
    assert all(part.replace('-', '+').replace('_', '/') for part in parts)


@mock_feature_flag(flag_name="fflag__feature_develop__prompts__dia_1829_jwt_token_auth", value=True)
def test_encode_full_returns_complete_jwt(token_backend):
    payload = {
        'user_id': 123,
        'exp': 1735689600,  # 2025-01-01
        'iat': 1704153600,  # 2024-01-02
    }
    token = token_backend.encode_full(payload)

    parts = token.split('.')
    assert len(parts) == 3

    assert all(part.replace('-', '+').replace('_', '/') for part in parts)


@mock_feature_flag(flag_name="fflag__feature_develop__prompts__dia_1829_jwt_token_auth", value=True)
def test_encode_vs_encode_full_comparison(token_backend):
    payload = {
        'user_id': 123,
        'exp': 1735689600,  # 2025-01-01
        'iat': 1704153600,  # 2024-01-02
    }
    partial_token = token_backend.encode(payload)
    full_token = token_backend.encode_full(payload)

    assert full_token.startswith(partial_token)

