import logging

logger = logging.getLogger(__name__)


class JWTAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        from core.feature_flags import flag_set
        from rest_framework_simplejwt.authentication import JWTAuthentication

        JWT_ACCESS_TOKEN_ENABLED = flag_set('fflag__feature_develop__prompts__dia_1829_jwt_token_auth')
        if JWT_ACCESS_TOKEN_ENABLED:
            try:
                # annoyingly, this only returns one object on failure so have to unpack awkwardly
                user_and_token = JWTAuthentication().authenticate(request)
                user = user_and_token[0] if user_and_token else None
                if user and user.active_organization.jwt.api_tokens_enabled:
                    request.user = user
                    request.is_jwt = True
            except:
                logger.info('Could not auth using jwt, falling back to other auth methods')
        return self.get_response(request)
