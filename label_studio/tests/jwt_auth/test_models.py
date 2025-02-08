import pytest
from jwt_auth.models import LSAPIToken, LSTokenBackend, TruncatedLSAPIToken
from organizations.models import Organization, OrganizationMember
from rest_framework_simplejwt.settings import api_settings as simple_jwt_settings
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken, OutstandingToken
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


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_jwt_settings_permissions():
    user = User.objects.create()
    org = Organization.objects.create(created_by=user)
    OrganizationMember.objects.create(
        user=user,
        organization=org,
    )
    jwt_settings = org.jwt
    jwt_settings.enabled = True

    user.is_owner = True
    user.save()
    assert jwt_settings.has_permission(user) is True

    user.is_owner = False
    user.save()
    assert jwt_settings.has_permission(user) is False


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
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


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
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


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
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


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
def test_encode_vs_encode_full_comparison(token_backend):
    payload = {
        'user_id': 123,
        'exp': 1735689600,  # 2025-01-01
        'iat': 1704153600,  # 2024-01-02
    }
    partial_token = token_backend.encode(payload)
    full_token = token_backend.encode_full(payload)

    assert full_token.startswith(partial_token)


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_token_lifecycle(test_token_user):
    """Test full token lifecycle including creation, access token generation, blacklisting, and validation"""
    # 1. Create an api token
    refresh_token = LSAPIToken.for_user(test_token_user)

    # 2. Create an access token
    access_token = refresh_token.access_token
    access_token.verify()  # Verify it's valid

    # 3. Get the (truncated) token from the db (like how the FE would get access, before revoking)
    jti = refresh_token[simple_jwt_settings.JTI_CLAIM]
    outstanding_token = OutstandingToken.objects.get(jti=jti)
    truncated_token_str = outstanding_token.token

    # 4. Revoke (blacklist) the token
    truncated_token = TruncatedLSAPIToken(truncated_token_str)
    truncated_token.blacklist()

    # 5. Verify that the revoked token can no longer be used
    assert BlacklistedToken.objects.filter(token__jti=jti).exists()


@pytest.mark.django_db
def test_token_creation_and_storage(test_token_user):
    """Test that tokens are created and stored correctly with truncated format"""
    token = LSAPIToken.for_user(test_token_user)
    assert token is not None

    # Token in database shouldn't contain the signature
    outstanding_token = OutstandingToken.objects.get(jti=token['jti'])
    stored_token_parts = outstanding_token.token.split('.')
    assert len(stored_token_parts) == 2  # Only header and payload

    # Full token should have all three JWT parts
    full_token = token.get_full_jwt()
    full_token_parts = full_token.split('.')
    assert len(full_token_parts) == 3  # Header, payload, and signature
