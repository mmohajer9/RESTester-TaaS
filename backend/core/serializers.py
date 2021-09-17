from .models import TestSuite, TestPlan
from rest_framework import serializers


class TestPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestPlan
        fields = "__all__"
