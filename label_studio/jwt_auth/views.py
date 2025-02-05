from core.permissions import all_permissions
from django.conf import settings
from django.utils.decorators import method_decorator
from django.utils.module_loading import import_string
from drf_yasg.utils import swagger_auto_schema
from rest_framework import generics, status
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView, TokenViewBase)

from jwt_auth.models import JWTSettings
from jwt_auth.serializers import (JWTSettingsSerializer,
                                  JWTSettingsUpdateSerializer,
                                  TokenRefreshResponseSerializer)

from .models import LSAPIToken, TruncatedLSAPIToken


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
        responses={
            status.HTTP_200_OK: TokenRefreshResponseSerializer,
        }
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

class LSAPITokenView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return OutstandingToken.objects.filter(user_id=self.request.user.id)

    def list(self, request, *args, **kwargs):
        outstanding_tokens = self.get_queryset()

        def _maybe_get_token(token: OutstandingToken):
            try:
                return TruncatedLSAPIToken(str(token.token))
            except:  # expired/invalid token
                return None

        token_objects = list(filter(None, [_maybe_get_token(token) for token in outstanding_tokens]))

        serializer = self.get_serializer(token_objects, many=True)
        data = serializer.data
        return Response(data)

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return import_string(settings.API_TOKEN_CREATE_SERIALIZER)
        return import_string(settings.API_TOKEN_LIST_SERIALIZER)

    def perform_create(self, serializer):
        token_class = import_string(settings.API_TOKEN_MODEL)
        token = token_class.for_user(self.request.user)
        serializer.instance = token
