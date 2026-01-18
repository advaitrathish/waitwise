from django.urls import path
from .views import api_test
from .views import Shop_list
urlpatterns=[
    path("api/shops/",Shop_list),
    path("api-test/", api_test),
]