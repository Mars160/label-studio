#!/usr/bin/env python3

from typing import Any

from annoying.fields import AutoOneToOneField
from django.db import models
from django.utils.translation import gettext_lazy as _
from organizations.models import Organization
from rest_framework_simplejwt.backends import TokenBackend
from rest_framework_simplejwt.tokens import RefreshToken, api_settings


class JWTSettings(models.Model):
    """Organization-specific JWT settings for authentication"""

    organization = AutoOneToOneField(Organization, related_name='jwt_base', primary_key=True, on_delete=models.DO_NOTHING)
    enabled = models.BooleanField(
        _('enabled'), default=False, help_text='Enable JWT authentication for this organization'
    )
    # ttl_days = models.IntegerField(
    #     _('time to live (days)'), default=30, help_text='Number of days before JWT tokens expire'
    # )

    created_at = models.DateTimeField(_('created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    def has_permission(self, user):
        """Check if user has permission to modify JWT settings"""
        if not self.organization.has_permission(user):
            return False
        return user.is_owner


class LSTokenBackend(TokenBackend):
    """A custom JWT token backend that truncates tokens before storing in the database.

    Extends simlpe jwt's TokenBackend to provide methods for generating both
    truncated tokens (header + payload only) and full tokens (header + payload + signature).
    This preserves privacy of the token by not exposing the signature to the frontend.
    """

    def encode(self, payload: dict[str, Any]) -> str:
        """Encode a payload into a truncated JWT token string.

        Args:
            payload: Dictionary containing the JWT claims to encode

        Returns:
            A truncated JWT string containing only the header and payload portions,
            with the signature section removed
        """
        header, payload, signature = super().encode(payload).split('.')
        return '.'.join([header, payload])

    def encode_full(self, payload: dict[str, Any]) -> str:
        """Encode a payload into a complete JWT token string.

        Args:
            payload: Dictionary containing the JWT claims to encode

        Returns:
            A complete JWT string containing header, payload and signature portions
        """
        return super().encode(payload)



class LSAPIToken(RefreshToken):
    """API token that utilizes JWT, but stores a truncated version and expires
    based on user settings

    This token class extends RefreshToken to provide organization-specific token
    lifetimes and support for truncated tokens. It uses the LSTokenBackend to
    securely store the token (without the signature).
    """

    _token_backend = LSTokenBackend(
        api_settings.ALGORITHM,
        api_settings.SIGNING_KEY,
        api_settings.VERIFYING_KEY,
        api_settings.AUDIENCE,
        api_settings.ISSUER,
        api_settings.JWK_URL,
        api_settings.LEEWAY,
        api_settings.JSON_ENCODER,
    )

    def get_full_jwt(self) -> str:
        """Get the complete JWT token string (including the signature).

        Returns:
            The full JWT token string with header, payload and signature
        """
        return self.get_token_backend().encode_full(self.payload)


class TruncatedLSAPIToken(LSAPIToken):
    """Handles JWT tokens that contain only header and payload (no signature).
    Used when frontend has access to truncated refresh tokens only."""

    def __init__(self, token: str) -> None:
        full_token = token + '.' + ('x' * 43)
        return super().__init__(full_token, verify=False)
