from rest_framework import serializers
from .models import Shop, TimeSlot, CrowdRecord

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model=Shop
        fields='__all__'

class TimeSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=TimeSlot
        fields='__all__'

class CrowdRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model=CrowdRecord
        fields='__all__'
