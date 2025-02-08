import logging

import pytest
from jwt_auth.models import LSAPIToken
from organizations.models import Organization
from rest_framework import status
from rest_framework.authtoken.models import Token
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

@pytest.mark.django_db
@pytest.fixture
def legacy_disabled_user():
    user = User.objects.create(email='legacy_disabled@example.com')
    org = Organization.objects.create(created_by=user)
    user.active_organization = org
    user.save()

    jwt_settings = user.active_organization.jwt
    jwt_settings.legacy_api_tokens_enabled = False
    jwt_settings.save()

    return user



@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_logging_when_basic_token_auth_used(jwt_disabled_user, caplog):
    token, _ = Token.objects.get_or_create(user=jwt_disabled_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Token {token.key}')
    caplog.set_level(logging.INFO)

    client.get('/api/projects/')
    basic_auth_logs = [record for record in caplog.records if record.message == 'Basic token authentication used']

    assert len(basic_auth_logs) == 1
    record = basic_auth_logs[0]
    assert record.user_id == jwt_disabled_user.id
    assert record.organization_id == jwt_disabled_user.active_organization.id
    assert record.endpoint == '/api/projects/'

@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_no_logging_when_jwt_token_auth_used(jwt_enabled_user, caplog):
    refresh = LSAPIToken.for_user(jwt_enabled_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')
    caplog.set_level(logging.INFO)

    client.get('/api/projects/')

    basic_auth_logs = [record for record in caplog.records if record.message == 'Basic token authentication used']
    assert len(basic_auth_logs) == 0


@mock_feature_flag(flag_name='fflag__feature_develop__prompts__dia_1829_jwt_token_auth', value=True)
@pytest.mark.django_db
def test_legacy_api_token_disabled_user_cannot_use_basic_token(legacy_disabled_user):
    token, _ = Token.objects.get_or_create(user=legacy_disabled_user)
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'Token {token.key}')

    response = client.get('/api/projects/')

    assert response.status_code == status.HTTP_401_UNAUTHORIZED
