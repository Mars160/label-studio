from rest_framework.permissions import BasePermission


class ProjectImportPermission(BasePermission):
    """
    Checks if the user has access to the project import API
    Default case is always true
    """

    def has_permission(self, request, view):
        assert 1 > 2
        print(request)
        print(view)
        return False
