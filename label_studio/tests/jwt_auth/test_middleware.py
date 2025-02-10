import pytest
from jwt_auth.models import LSAPIToken
from organizations.models import Organization
from rest_framework import status
from rest_framework.test import APIClient
from rest_framework.authtoken.models import Token
from users.models import User

from ..utils import mock_feature_flag


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

 
@pytest.mark.django_db
@pytest.fixture
def jwt_token_auth_user():
    user = User.objects.create(email='jwt_token_auth@example.com')
    org = Organization.objects.create(created_by=user)
    user.active_organization = org
    user.save()
   
    jwt_settings = user.active_organization.jwt
    jwt_settings.api_tokens_enabled = True
    jwt_settings.legacy_api_tokens_enabled = False
    jwt_settings.save()
    
    return user


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_request_with_valid_token_returns_authenticated_user(jwt_token_auth_user):
    refresh = LSAPIToken.for_user(jwt_token_auth_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')

    response = client.get('/api/projects/')

    assert response.status_code == status.HTTP_200_OK
    assert response.wsgi_request.user == jwt_token_auth_user


@pytest.mark.django_db
@pytest.fixture
def legacy_token_auth_user():
    user = User.objects.create(email='legacy_token_auth@example.com')
    org = Organization.objects.create(created_by=user)
    user.active_organization = org
    user.save()
    
    jwt_settings = user.active_organization.jwt
    jwt_settings.api_tokens_enabled = False
    jwt_settings.legacy_api_tokens_enabled = True
    jwt_settings.save()
    
    return user


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_legacy_token_auth_user_cannot_use_jwt_token(legacy_token_auth_user):
    refresh = LSAPIToken.for_user(legacy_token_auth_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')
    
    response = client.get('/api/projects/')
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
     

@pytest.mark.django_db
@pytest.fixture
def both_token_auth_user():
    user = User.objects.create(email='both_token_auth@example.com')
    org = Organization.objects.create(created_by=user)
    user.active_organization = org
    user.save()
   
    jwt_settings = user.active_organization.jwt
    jwt_settings.api_tokens_enabled = True
    jwt_settings.legacy_api_tokens_enabled = True
    jwt_settings.save()
    
    return user


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_user_with_both_auth_enabled_can_use_both_methods(both_token_auth_user):
    client = APIClient()

    # JWT token auth
    refresh = LSAPIToken.for_user(both_token_auth_user)
    client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')
    
    response = client.get('/api/projects/')
     
    assert response.status_code == status.HTTP_200_OK
    assert response.wsgi_request.user == both_token_auth_user

    # Basic token auth
    token, _ = Token.objects.get_or_create(user=both_token_auth_user)
    client.credentials(HTTP_AUTHORIZATION=f'Token {token.key}')
    
    response = client.get('/api/projects/')
     
    assert response.status_code == status.HTTP_200_OK
    assert response.wsgi_request.user == both_token_auth_user
    

@pytest.mark.django_db
@pytest.fixture
def no_token_auth_user():
    user = User.objects.create(email='no_token_auth@example.com')
    org = Organization.objects.create(created_by=user)
    user.active_organization = org
    user.save()
    
    jwt_settings = user.active_organization.jwt
    jwt_settings.api_tokens_enabled = False
    jwt_settings.legacy_api_tokens_enabled = False
    jwt_settings.save()
    
    return user


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_user_with_no_auth_enabled_cannot_use_either_method(no_token_auth_user):
    client = APIClient()

    # JWT token auth
    refresh = LSAPIToken.for_user(no_token_auth_user)
    client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')
    
    response = client.get('/api/projects/')
     
    assert response.status_code == status.HTTP_401_UNAUTHORIZED

    # Basic token auth
    token, _ = Token.objects.get_or_create(user=no_token_auth_user)
    client.credentials(HTTP_AUTHORIZATION=f'Token {token.key}')
    
    response = client.get('/api/projects/')
     
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
