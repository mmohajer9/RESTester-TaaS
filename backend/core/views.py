import os
import pathlib
from rest_framework import viewsets, generics
from rest_framework import permissions

from django.shortcuts import render
from django.db.models import Q
from django.conf import settings
from django.core.files import File


from .generics import EnhancedModelViewSet
from .models import TestSuite, TestPlan
from .permissions import Forbidden, IsTestPlanOwner, IsTestSuiteOwner
from .serializers import TestPlanSerializer, TestSuiteSerializer
from .connector import RESTesterConnector


# Create your views here.


class TestPlanViewSet(EnhancedModelViewSet):
    def get_queryset(self):
        user = self.request.user
        return TestPlan.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    serializer_class = TestPlanSerializer

    permission_classes = [permissions.IsAuthenticated, IsTestPlanOwner]

    ordering_fields = "__all__"
    ordering = ["id"]
    filterset_fields = ["id", "name"]
    search_fields = ["id", "name"]


class TestSuiteViewSet(EnhancedModelViewSet):
    def get_queryset(self):
        user = self.request.user
        return TestSuite.objects.filter(test_plan__user=user)

    def perform_create(self, serializer):
        rc = RESTesterConnector()
        test_plan = serializer.validated_data.get("test_plan")

        target_tmp_dir = os.path.join(
            settings.MEDIA_ROOT, "tmp", test_plan.user.username
        )
        pathlib.Path(target_tmp_dir).mkdir(parents=True, exist_ok=True)
        rc.init(test_plan.open_api_spec_file.path, target_tmp_dir)
        target_odg_path = os.path.join(target_tmp_dir, "odg.json")

        with open(target_odg_path) as odg_file:
            test_plan.operation_dep_graph_file.save(
                "odg.json", File(odg_file), save=True
            )

        generated_test_cases_path = os.path.join(target_tmp_dir, "test-cases")

        rc.generate(
            test_plan.number_of_test_cases,
            test_plan.open_api_spec_file.path,
            test_plan.operation_dep_graph_file.path,
            generated_test_cases_path,
            test_plan.use_example,
        )

        filenames = next(os.walk(generated_test_cases_path), (None, None, []))[2]
        error_test_cases_file = None
        nominal_test_cases_file = None
        for filename in filenames:
            target_file_path = os.path.join(generated_test_cases_path, filename)

            if "error" in filename:
                f = open(target_file_path)
                error_test_cases_file = File(f, name=filename)

            elif "nominal" in filename:
                f = open(target_file_path)
                nominal_test_cases_file = File(f, name=filename)

        with open(target_file_path) as test_cases:
            serializer.save(
                result_nominal=nominal_test_cases_file,
                result_error=error_test_cases_file,
            )

        nominal_test_cases_file.close()
        error_test_cases_file.close()

    serializer_class = TestSuiteSerializer

    permission_classes = [permissions.IsAuthenticated, IsTestSuiteOwner]

    ordering_fields = "__all__"
    ordering = ["id"]

    filterset_fields = ["id", "test_plan" , "test_plan__id", "test_plan__name"]
    # search_fields = ["id", "test_plan__id"]

    action_permission_classes = {
        # "list": [permissions.AllowAny],
        # "create": [permissions.IsAuthenticated, IsNotSeller],
        # "retrieve": [permissions.AllowAny],
        "update": [Forbidden],
        "partial_update": [Forbidden],
        # "destroy": [permissions.IsAuthenticated, IsOwner],
    }
