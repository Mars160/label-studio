from typing import Any

from jwt_auth.models import JWTSettings, LSAPIToken, TruncatedLSAPIToken
from rest_framework import serializers


# Recommended implementation from JWT to support drf-yasg:
# https://django-rest-framework-simplejwt.readthedocs.io/en/latest/drf_yasg_integration.html
class TokenRefreshResponseSerializer(serializers.Serializer):
    access = serializers.CharField()


class JWTSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = JWTSettings
        fields = ('api_tokens_enabled',)


class JWTSettingsUpdateSerializer(JWTSettingsSerializer):
    pass


class LSAPITokenCreateSerializer(serializers.Serializer):
    token = serializers.SerializerMethodField()

    def get_token(self, obj):
        return obj.get_full_jwt()

    class Meta:
        model = LSAPIToken
        fields = ['token']


class LSAPITokenListSerializer(LSAPITokenCreateSerializer):
    def get_token(self, obj):
        return obj.token


class LSAPITokenBlacklistSerializer(serializers.Serializer):
    refresh = serializers.CharField(write_only=True)
    token_class = LSAPIToken

    def validate(self, attrs: dict[str, Any]) -> dict[Any, Any]:
        token_str = attrs['refresh']
        if len(token_str.split('.')) == 2:
            token = TruncatedLSAPIToken(token_str)
        else:
            token = LSAPIToken(token_str)
        try:
            token.blacklist()
        except AttributeError:
            pass
        return {}
