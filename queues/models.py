from django.db import models

class Shop (models.Model):
    name=models.CharField(max_length=100)
    location=models.CharField(max_length=200)
    is_open=models.BooleanField(default=True)