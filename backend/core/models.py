from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model


UserModel = get_user_model()


# Create your models here.


def open_api_spec_upload_path(instance, filename):
    return f"accounts/{instance.user.username}/oas/{filename}"


def operation_dep_graph_upload_path(instance, filename):
    return f"accounts/{instance.user.username}/odg/{filename}"


class TestPlan(models.Model):

    user = models.ForeignKey(
        UserModel, verbose_name=_("User"), on_delete=models.CASCADE
    )
    name = models.CharField(_("Name"), max_length=250)
    open_api_spec_file = models.FileField(
        _("Open API Specification file"),
        upload_to=open_api_spec_upload_path,
        max_length=200,
        blank=True,
        null=True,
    )
    operation_dep_graph_file = models.FileField(
        _("Operation Dependency Graph file"),
        upload_to=open_api_spec_upload_path,
        max_length=200,
        blank=True,
        null=True,
    )

    number_of_test_cases = models.IntegerField(
        _("Number of to be generated test cases"), default=1
    )

    use_example = models.BooleanField(
        _("Use examples provided by specification"), default=True
    )

    created_at = models.DateTimeField(
        _("Created at"), auto_now_add=True, blank=True, null=True
    )
    updated_at = models.DateTimeField(
        _("Updated at"), auto_now=True, blank=True, null=True
    )

    def __str__(self):
        return self.name

    class Meta:
        # db_table = ''
        # managed = True
        verbose_name = "Test Plan"
        verbose_name_plural = "Test Plans"


class TestSuite(models.Model):

    test_plan = models.ForeignKey(
        "core.TestPlan", verbose_name=_("Test Suite"), on_delete=models.CASCADE
    )
    
    result = models.JSONField(_("Result"), blank=True, null=True)

    created_at = models.DateTimeField(
        _("Created at"), auto_now_add=True, blank=True, null=True
    )
    updated_at = models.DateTimeField(
        _("Updated at"), auto_now=True, blank=True, null=True
    )

    def __str__(self):
        return self.test_plan.name

    class Meta:
        # db_table = ''
        # managed = True
        verbose_name = "Test Suite"
        verbose_name_plural = "Test Suites"
