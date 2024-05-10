from django.db import models
from datetime import datetime, timedelta
# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length = 20, unique = True)
    sold = models.TextField(max_length = 100)

class Technician(models.Model):
    first_name = models.TextField(max_length = 20)
    last_name = models.TextField(max_length = 20)
    employee_id = models.CharField(max_length = 100, unique = True)

class Appointment(models.Model):
    set_date = models.DateField(default=None)
    set_time = models.TimeField(default=None)
    reason = models.TextField(max_length = 250)
    status = models.TextField(max_length = 20)
    vin = models.CharField(max_length = 20, unique = True)
    customer = models.TextField(max_length = 50)
    technician = models.ForeignKey(
        Technician,
        related_name = "technician",
        on_delete = models.CASCADE,
        default = None
    )

    # def __str__(self):
    #     return self.technician
