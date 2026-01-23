from django.db import models

class Shop (models.Model):
    name=models.CharField(max_length=100)           #Name of shop
    location=models.CharField(max_length=200)       #Location of shop
    open_time=models.TimeField()                    #Opening time of shop
    close_time=models.TimeField()                   #Closing time of shop
    working_days=models.CharField(max_length=50)    #shop working days (like: "Mon-Fri")

    def __str__(self):
        return self.name
    
class TimeSlot(models.Model):
    shop=models.ForeignKey(Shop,on_delete=models.CASCADE,
                           related_name="time_slots") #Shop to which this time slot belongs
    start_time=models.TimeField()
    end_time=models.TimeField()
    label=models.CharField(max_length=100,blank=True) #Optional label for time slot

    def __str__(self):
        return f"{self.shop.name} | {self.start_time} - {self.end_time}"
    

class CrowdRecord(models.Model):
    shop=models.ForeignKey(Shop,on_delete=models.CASCADE,
                           related_name="crowd_records") #Shop to which this record belongs
    timeslot=models.ForeignKey(TimeSlot,on_delete=models.CASCADE,
                               related_name="crowd_records") #TimeSlot to which this record belongs
    date=models.DateField()
    people_count=models.PositiveIntegerField()

    def __str__(self):
        return f"{self.shop.name} | {self.date} | {self.people_count}"