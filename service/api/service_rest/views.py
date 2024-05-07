from django.shortcuts import render
from django.http import JsonResponse
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, Appointment, Technician
import json
# Create your views here.

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = {
        "vin",
        "sold",
    }

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = {
        "first_name",
        "last_name",
        "employee_id",
    }

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = {
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician",
    }
    encoders = {
        "technician": TechnicianEncoder()
        }

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder = TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        # try:
        #     appointment = Appointment.objects.get(id = content["appointment"])
        #     content["appointment"] = appointment
        # except Appointment.DoesNotExist:
        #     return JsonResponse(
        #         {"message": "No appointment found"},
        #         status = 400,
        #     )
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder = TechnicianEncoder,
            safe = False,
        )

@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointment = Appointment.objects.all()
        return JsonResponse(
            {"appointment": appointment},
            encoder = AppointmentEncoder,
        )
    else:
        content = json.loads(request.body)
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder = AppointmentEncoder,
            safe = False,
        )
