from django.db import models
# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length = 20, unique = True)
    sold = models.TextField(max_length = 100)

class Technician(models.Model):
    first_name = models.TextField(max_length = 20)
    last_name = models.TextField(max_length = 20)
    employee_id = models.CharField(max_length = 100)

class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.TextField(max_length = 250)
    status = models.TextField(max_length = 20)
    vin = models.CharField(max_length = 20)
    customer = models.TextField(max_length = 50)
    technician = models.ForeignKey(
        Technician,
        related_name = "technician",
        on_delete = models.CASCADE
    )

    def __str__(self):
        return self.technician
