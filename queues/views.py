from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Shop
from .serializers import shopserializer

@api_view(['GET'])
def Shop_list(request):
    Shops=Shop.objects.all()
    serializer=shopserializer(Shops,many=True)
    return Response(serializer.data)


def api_test(request):
    return HttpResponse("API working fine!")