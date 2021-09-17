from rest_framework import viewsets
from rest_framework import permissions

from django.shortcuts import render
from django.db.models import Q

from .generics import EnhancedModelViewSet
from .models import TestSuite, TestPlan
from .permissions import IsTestPlanOwner, IsTestSuiteOwner
from .serializers import TestPlanSerializer

# Create your views here.


class TestPlanViewSet(EnhancedModelViewSet):
    def get_queryset(self):
        user = self.request.user
        return TestPlan.objects.filter(user=user)

    serializer_class = TestPlanSerializer

    permission_classes = [permissions.IsAuthenticated, IsTestPlanOwner]

    ordering_fields = "__all__"
    ordering = ["id"]
