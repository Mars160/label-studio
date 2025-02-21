from rest_framework.permissions import BasePermission
from projects.models import ProjectMember


class ProjectImportPermission(BasePermission):
    """
    Checks if the user has access to the project import API
    Default case is always true
    """

    def has_permission(self, request, view):
        return True
    

class ProjectAdminPermission(BasePermission):
    """
    Checks if the user has access to the project Manage API
    """

    def has_permission(self, request, view):
        # 查看request方法
        if request.method == 'GET':
            return True
        project_id = view.kwargs.get('pk')
        user_id = request.user.id

        project_member = ProjectMember.objects.filter(project_id=project_id, user_id=user_id).first()
        if project_member and project_member.role in ['admin']:
            return True
        return False


class ProjectMemberPermission(BasePermission):
    """
    Checks if the user has access to the project members API
    Default case is always true
    """

    def has_permission(self, request, view):
        # 查看request方法
        if request.method == 'GET':
            return True
        project_id = view.kwargs.get('pk')
        user_id = request.user.id

        project_member = ProjectMember.objects.filter(project_id=project_id, user_id=user_id).first()
        if project_member and project_member.role in ['admin']:
            return True
        print(project_member)
        print(project_id, user_id)
        print(project_member.role)
        return False
