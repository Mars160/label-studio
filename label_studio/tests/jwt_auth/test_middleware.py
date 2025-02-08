
import pytest
from jwt_auth.models import LSAPIToken
from organizations.models import Organization
from rest_framework import status
from rest_framework.test import APIClient
from users.models import User

from ..utils import mock_feature_flag


@pytest.mark.django_db
@pytest.fixture
def jwt_disabled_user():
    user = User.objects.create(email='jwt_disabled@example.com')
    org = Organization.objects.create(created_by=user)
    user.active_organization = org
    user.save()
    
    jwt_settings = user.active_organization.jwt
    jwt_settings.api_tokens_enabled = False
    jwt_settings.save()
    
    return user


@pytest.mark.django_db
@pytest.fixture
def jwt_enabled_user():
    user = User.objects.create(email='jwt_enabled@example.com')
    org = Organization.objects.create(created_by=user)
    user.active_organization = org
    user.save()
   
    jwt_settings = user.active_organization.jwt
    jwt_settings.api_tokens_enabled = True
    jwt_settings.save()
    
    return user


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_request_without_auth_header_returns_401():
    client = APIClient()

    response = client.get('/api/projects/')
    
    assert response.status_code == status.HTTP_401_UNAUTHORIZED


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_request_with_invalid_token_returns_401():
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION='Bearer invalid.token.here')
    response = client.get('/api/projects/')

    assert response.status_code == status.HTTP_401_UNAUTHORIZED


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_request_with_valid_token_returns_authenticated_user(jwt_enabled_user):
    refresh = LSAPIToken.for_user(jwt_enabled_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')

    response = client.get('/api/projects/')

    assert response.status_code == status.HTTP_200_OK
    assert response.wsgi_request.user == jwt_enabled_user


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_jwt_disabled_user_cannot_use_jwt_token(jwt_disabled_user):
    refresh = LSAPIToken.for_user(jwt_disabled_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')
    
    response = client.get('/api/projects/')
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
