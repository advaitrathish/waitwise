from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def api_test(request):
    return HttpResponse("API working fine!")