
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

    class Meta:
        model = LSAPIToken
        fields = ['token']


class LSAPITokenListSerializer(LSAPITokenCreateSerializer):

    def get_token(self, obj):
        return obj.token
