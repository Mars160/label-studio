import logging

from core.permissions import all_permissions
from django.utils.decorators import method_decorator
from drf_yasg.utils import swagger_auto_schema
from rest_framework import generics, status
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.exceptions import TokenBackendError, TokenError
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken
from rest_framework_simplejwt.views import TokenRefreshView, TokenViewBase

logger = logging.getLogger(__name__)

from jwt_auth.models import JWTSettings, LSAPIToken, TruncatedLSAPIToken
from jwt_auth.serializers import (
    JWTSettingsSerializer,
    JWTSettingsUpdateSerializer,
    LSAPITokenBlacklistSerializer,
    LSAPITokenCreateSerializer,
    LSAPITokenListSerializer,
    TokenRefreshResponseSerializer,
)


@method_decorator(
    name='get',
    decorator=swagger_auto_schema(
        tags=['JWT'],
        operation_summary='Retrieve JWT Settings',
        operation_description='Retrieve JWT settings for the currently active organization.',
    ),
)
@method_decorator(
    name='post',
    decorator=swagger_auto_schema(
        tags=['JWT'],
        operation_summary='Update JWT Settings',
        operation_description='Update JWT settings for the currently active organization.',
    ),
)
class JWTSettingsAPI(CreateAPIView):
    queryset = JWTSettings.objects.all()
    permission_required = all_permissions.organizations_change

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return JWTSettingsSerializer
        return JWTSettingsUpdateSerializer

    def get(self, request, *args, **kwargs):
        jwt = request.user.active_organization.jwt
        return Response(self.get_serializer(jwt).data)

    def post(self, request, *args, **kwargs):
        jwt = request.user.active_organization.jwt
        serializer = self.get_serializer(data=request.data, instance=jwt)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# Recommended implementation from JWT to support drf-yasg:
# https://django-rest-framework-simplejwt.readthedocs.io/en/latest/drf_yasg_integration.html
class DecoratedTokenRefreshView(TokenRefreshView):
    @swagger_auto_schema(
        tags=['JWT'],
        responses={
            status.HTTP_200_OK: TokenRefreshResponseSerializer,
        },
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


@method_decorator(
    name='get',
    decorator=swagger_auto_schema(
        tags=['JWT'],
        operation_summary='List API tokens',
        operation_description='List all API tokens for the current user.',
    ),
)
@method_decorator(
    name='post',
    decorator=swagger_auto_schema(
        tags=['JWT'],
        operation_summary='Create API token',
        operation_description='Create a new API token for the current user.',
    ),
)
class LSAPITokenView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    token_class = LSAPIToken

    def get_queryset(self):
        return OutstandingToken.objects.filter(user_id=self.request.user.id, token_type='refresh')

    def list(self, request, *args, **kwargs):
        outstanding_tokens = self.get_queryset()

        def _maybe_get_token(token: OutstandingToken):
            try:
                return TruncatedLSAPIToken(str(token.token))
            except (TokenError, TokenBackendError) as e:  # expired/invalid token
                logger.info('JWT API token validation failed: %s', e)
                return None

        token_objects = list(filter(None, [_maybe_get_token(token) for token in outstanding_tokens]))

        serializer = self.get_serializer(token_objects, many=True)
        data = serializer.data
        return Response(data)

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return LSAPITokenCreateSerializer
        return LSAPITokenListSerializer

    def perform_create(self, serializer):
        token = self.token_class.for_user(self.request.user)
        serializer.instance = token


class LSTokenBlacklistView(TokenViewBase):
    _serializer_class = 'jwt_auth.serializers.LSAPITokenBlacklistSerializer'

    @swagger_auto_schema(
        tags=['JWT'],
        responses={
            status.HTTP_200_OK: LSAPITokenBlacklistSerializer,
        },
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
