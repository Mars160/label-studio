from datetime import datetime

from jwt_auth.models import LSAPIToken
from rest_framework import serializers


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
