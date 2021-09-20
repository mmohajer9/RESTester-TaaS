from django.contrib import admin
from .models import TestPlan, TestSuite
from django.utils.translation import ugettext_lazy as _

# Register your models here.

admin.site.site_header = _("Administration Panel of RESTester TaaS")


@admin.register(TestPlan)
class SellerAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "name",
        "open_api_spec_file",
        "operation_dep_graph_file",
        "number_of_test_cases",
        "use_example",
        "created_at",
        "updated_at",
    )
    # list_filter = ["user", "title", "business_phone"]
    # search_fields = ('user__username','postal_code__startswith')
    # prepopulated_fields = {'slug': ('title',)}


@admin.register(TestSuite)
class CityAdmin(admin.ModelAdmin):
    list_display = (
        "test_plan",
        "result_nominal",
        "result_error",
        "created_at",
        "updated_at",
    )
    # list_filter = ["user", "title", "business_phone"]
    # search_fields = ('user__username','postal_code__startswith')
    # prepopulated_fields = {'slug': ('title',)}

    # def country(self, obj):
    #     return obj.related_province.related_country
