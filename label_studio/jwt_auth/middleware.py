

def get_user_jwt(request):
    from django.contrib.auth.middleware import get_user
    from rest_framework_simplejwt.authentication import JWTAuthentication

    try:
        user = get_user(request)
        if user.is_authenticated:
            return user

        jwt_authentication = JWTAuthentication()
        auth_header = jwt_authentication.get_header(request)
        if not auth_header:
            return None
        if isinstance(auth_header, str):
            auth_header = auth_header.encode()

        raw_token = jwt_authentication.get_raw_token(auth_header)
        validated_token = jwt_authentication.get_validated_token(
            raw_token
        )
        user = jwt_authentication.get_user(validated_token)
    except:
        user = None

    return user


class JWTAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        from core.feature_flags import flag_set
        from django.utils.functional import SimpleLazyObject

        JWT_ACCESS_TOKEN_ENABLED = flag_set('fflag__feature_develop__prompts__dia_1829_jwt_token_auth')
        if JWT_ACCESS_TOKEN_ENABLED:
            user = SimpleLazyObject(lambda: get_user_jwt(request))
            if user and hasattr(user.active_organization, 'jwt_base') and user.active_organization.jwt_base.enabled:
                request.user = user
                request.is_jwt = True
        return self.get_response(request)
