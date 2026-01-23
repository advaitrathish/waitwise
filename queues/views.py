from django.shortcuts import render

from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Shop, TimeSlot, CrowdRecord
from .serializers import ShopSerializer, TimeSlotSerializer, CrowdRecordSerializer

class ShopListView(APIView):
    def get(self, request):
        shops = Shop.objects.all()
        serializer = ShopSerializer(shops, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class TimeSlotListView(APIView):
    def get(self, request, shop_id):
        timeslots = TimeSlot.objects.filter(shop__id=shop_id)
        serializer = TimeSlotSerializer(timeslots, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class CrowdRecordListView(APIView):
    def get(self, request, shop_id):
        crowd_records = CrowdRecord.objects.filter(shop__id=shop_id)
        serializer = CrowdRecordSerializer(crowd_records, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ProtectedTestView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "message": "JWT Working", "user": request.user.username
        })