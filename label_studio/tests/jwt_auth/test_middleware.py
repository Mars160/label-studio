import logging
from unittest.mock import MagicMock, patch

import pytest
from organizations.models import Organization
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient
from jwt_auth.models import LSAPIToken
from users.models import User
from organizations.models import OrganizationMember



@pytest.mark.django_db
@pytest.fixture
def jwt_disabled_user():
    user = User.objects.create(email='jwt_disabled@example.com')
    org = Organization.objects.create(created_by=user)
    user.active_organization = org
    user.save()
    
    jwt_settings = user.active_organization.jwt_base
    jwt_settings.enabled = False
    jwt_settings.save()
    
    return user

@pytest.mark.django_db
@pytest.fixture
def jwt_enabled_user():
    user = User.objects.create(email='jwt_enabled@example.com')
    org = Organization.objects.create(created_by=user)
    user.active_organization = org
    user.save()
   
    jwt_settings = user.active_organization.jwt_base
    jwt_settings.enabled = True
    jwt_settings.save()
    
    return user

@pytest.mark.django_db
def test_logging_when_basic_token_auth_used(jwt_disabled_user, caplog):
    token, _ = Token.objects.get_or_create(user=jwt_disabled_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Token {token.key}')
    caplog.set_level(logging.WARNING)
    
    client.get('/api/projects/')
    basic_auth_warnings = [
        record for record in caplog.records 
        if record.message == 'Basic token authentication used'
    ]
    
    assert len(basic_auth_warnings) == 1
    record = basic_auth_warnings[0]
    assert record.user_id == jwt_disabled_user.id
    assert record.organization_id == jwt_disabled_user.active_organization.id
    assert record.endpoint == '/api/projects/'

@pytest.mark.django_db
def test_no_logging_when_jwt_token_auth_used(jwt_enabled_user, caplog):
    refresh = LSAPIToken.for_user(jwt_enabled_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')
    caplog.set_level(logging.WARNING)
    
    client.get('/api/projects/')
    
    basic_auth_warnings = [
        record for record in caplog.records 
        if record.message == 'Basic token authentication used'
    ]
    assert len(basic_auth_warnings) == 0

@pytest.mark.django_db
def test_request_without_auth_header_returns_401():
    client = APIClient()

    response = client.get('/api/projects/')
    
    assert response.status_code == 401

@pytest.mark.django_db
def test_request_with_invalid_token_returns_401():
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION='Bearer invalid.token.here')

    response = client.get('/api/projects/')
    
    assert response.status_code == 401

@pytest.mark.django_db
def test_request_with_valid_token_returns_authenticated_user(jwt_enabled_user):
    refresh = LSAPIToken.for_user(jwt_enabled_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')
    
    request = client.get('/api/projects/').wsgi_request
    
    assert request.user == jwt_enabled_user

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
   

@pytest.mark.django_db
def test_jwt_enabled_user_cannot_use_basic_token(jwt_enabled_user):
    token, _ = Token.objects.get_or_create(user=jwt_enabled_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Token {token.key}')
    
    response = client.get('/api/projects/')
    assert response.status_code == 401

@pytest.mark.django_db
def test_jwt_disabled_user_cannot_use_jwt_token(jwt_disabled_user):
    refresh = LSAPIToken.for_user(jwt_disabled_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')
    
    response = client.get('/api/projects/')
    assert response.status_code == 401
