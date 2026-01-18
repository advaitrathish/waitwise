from rest_framework import serializers
from .models import Shop

class shopserializer(serializers.ModelSerializer):
    class Meta:
        model=Shop
        fields='__all__'