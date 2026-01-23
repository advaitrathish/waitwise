from django.urls import path
from .views import ShopListView, TimeSlotListView, CrowdRecordListView
from rest_framework_simplejwt.views import TokenObtainPairView
from .views import ProtectedTestView

urlpatterns=[
    path('shops/',ShopListView.as_view()),
    path('shops/<int:shop_id>/timeslots/',TimeSlotListView.as_view()),
    path('shops/<int:shop_id>/crowdrecords/',CrowdRecordListView.as_view()),
    path('api_login/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('api/protected/test/',ProtectedTestView.as_view()),
    path('protected-test/', ProtectedTestView.as_view()),
]