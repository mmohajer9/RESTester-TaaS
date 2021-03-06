from rest_framework.permissions import BasePermission, SAFE_METHODS

# from django.contrib.auth.models import AnonymousUser


class SampleCustomPermission(BasePermission):

    """First Priority : has_permission() will be executed for the first time"""

    def has_permission(self, request, view):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        return True

    # ONLY FOR A API VIEW THAT IS DEDICATED FOR A SPECIFIC OBJECT LIKE : RetrieveUpdateAPIView and not like : ListAPIView
    """After the first priority the second priority that is has_object_permission() will be executed"""

    def has_object_permission(self, request, view, obj):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        return True


class Forbidden(BasePermission):

    """First Priority : has_permission() will be executed for the first time"""

    def has_permission(self, request, view):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        return False


class IsTestPlanOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        return bool(request.user and obj.user and request.user == obj.user)


class IsTestSuiteOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        return bool(
            request.user and obj.test_plan.user and request.user == obj.test_plan.user
        )
