from django.urls import path, include
from rest_framework import routers
# from .views import 

app_name = "core"

router = routers.SimpleRouter()

# router.register("transactions", TransactionViewSet, basename="transactions")


urlpatterns = [path("", include(router.urls))]