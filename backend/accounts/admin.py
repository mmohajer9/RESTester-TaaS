from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.
@admin.register(User)
class MyUserAdmin(UserAdmin):
    pass
    # list_display = ("user", "title", "business_phone")
    # list_filter = ["user", "title", "business_phone"]
    # search_fields = ('user__username','postal_code__startswith')
    # prepopulated_fields = {'slug': ('title',)}
