from django.urls import path, include
from rest_framework import routers
from .views import TestPlanViewSet, TestSuiteViewSet

app_name = "core"

router = routers.SimpleRouter()

router.register("test_plans", TestPlanViewSet, basename="test-plan")
router.register("test_suites", TestSuiteViewSet, basename="test-suite")

urlpatterns = [path("", include(router.urls))]
