import logging

from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed

logger = logging.getLogger(__name__)


class TokenAuthenticationPhaseout(TokenAuthentication):
    """TokenAuthentication that logs usage to help track basic token authentication usage."""

    def authenticate(self, request):
        """Authenticate the request and log if successful."""
        from core.feature_flags import flag_set

        auth_result = super().authenticate(request)
        JWT_ACCESS_TOKEN_ENABLED = flag_set('fflag__feature_develop__prompts__dia_1829_jwt_token_auth')
        if JWT_ACCESS_TOKEN_ENABLED and (auth_result is not None):
            user, _ = auth_result
            org = user.active_organization
            org_id = org.id if org else None

            # raise 401 if JWT enabled (i.e. this token is no longer valid)
            if org and org.jwt.enabled:
                raise AuthenticationFailed(
                    'Authentication token no longer valid: JWT authentication is required for this organization'
                )

            logger.info(
                'Basic token authentication used',
                extra={'user_id': user.id, 'organization_id': org_id, 'endpoint': request.path}
            )
        return auth_result
