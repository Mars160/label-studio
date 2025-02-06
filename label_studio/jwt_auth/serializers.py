from datetime import datetime

from jwt_auth.models import JWTSettings, LSAPIToken
from rest_framework import serializers


# Recommended implementation from JWT to support drf-yasg:
# https://django-rest-framework-simplejwt.readthedocs.io/en/latest/drf_yasg_integration.html
class TokenRefreshResponseSerializer(serializers.Serializer):
    access = serializers.CharField()

    # TODO do we really need these NotImplementedErrors?
    def create(self, validated_data):
        raise NotImplementedError()

    def update(self, instance, validated_data):
        raise NotImplementedError()


class JWTSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = JWTSettings
        fields = ('enabled',)


class JWTSettingsUpdateSerializer(JWTSettingsSerializer):
    pass


class LSAPITokenCreateSerializer(serializers.Serializer):
    token = serializers.SerializerMethodField()

    def get_token(self, obj):
        return obj.get_full_jwt()

    def get_created_at(self, obj):
        created_at_timestamp = obj['iat']
        return datetime.fromtimestamp(created_at_timestamp).strftime('%Y-%m-%d %H:%M:%S %Z')

    def get_expires_at(self, obj):
        expiration_timestamp = obj['exp']
        return datetime.fromtimestamp(expiration_timestamp).strftime('%Y-%m-%d %H:%M:%S %Z')

    class Meta:
        model = LSAPIToken
        fields = ['token']


class LSAPITokenListSerializer(LSAPITokenCreateSerializer):

    def get_token(self, obj):
        return obj.token
