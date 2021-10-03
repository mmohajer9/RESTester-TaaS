from .models import TestSuite, TestPlan
from rest_framework import serializers


class TestPlanSerializer(serializers.ModelSerializer):

    username = serializers.SerializerMethodField()

    class Meta:
        model = TestPlan
        fields = [
            "id",
            "name",
            "open_api_spec_file",
            "operation_dep_graph_file",
            "number_of_test_cases",
            "use_example",
            "user",
            "username",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["user"]

    def get_username(self, obj):
        return obj.user.username


class TestSuiteSerializer(serializers.ModelSerializer):

    username = serializers.SerializerMethodField()
    test_plan_name = serializers.SerializerMethodField()

    class Meta:
        model = TestSuite
        fields = "__all__"
        read_only_fields = ["result_nominal", "result_error"]

    def get_username(self, obj):
        return obj.test_plan.user.username

    def get_test_plan_name(self, obj):
        return obj.test_plan.name
