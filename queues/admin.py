from django.contrib import admin
from .models import Shop, TimeSlot, CrowdRecord

from .models import Shop    #Import the Shop model
admin.site.register(Shop)   #Register the Shop model
admin.site.register(TimeSlot)   #Register the TimeSlot model
admin.site.register(CrowdRecord)    #Register the CrowdRecord model