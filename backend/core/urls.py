from django.urls import path, include
from rest_framework import routers
from .views import TestPlanViewSet

app_name = "core"

router = routers.SimpleRouter()

router.register("test_plans", TestPlanViewSet, basename="test-plan")


urlpatterns = [path("", include(router.urls))]