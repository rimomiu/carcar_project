from time import strftime
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
        "id"
    }

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = {
        "status",
        "is_vip",
        "set_date",
        "set_time",
        "reason",
        "vin",
        "customer",
        "technician",
        "id"
    }
    encoders = {
        "technician": TechnicianEncoder()
        }

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder = TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        technicians = Technician.objects.create(**content)
        return JsonResponse(
            technicians,
            encoder = TechnicianEncoder,
            safe = False,
        )

@require_http_methods(["GET", "POST", "PUT"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder = AppointmentEncoder,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.get(id=content["technician"])
        content["technician"] = technician
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder = AppointmentEncoder,
            safe = False,
        )


@require_http_methods(["DELETE", "GET"])
def api_show_technicians(request, id):
    if request.method == "GET":
        technicians = Technician.objects.get(id=id)
        return JsonResponse(
        technicians,
        encoder=TechnicianEncoder,
        safe=False
        )
    elif request.method == "DELETE":
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
    technicians = Technician.objects.filter(pk=id).update(**content)
    return JsonResponse(
        technicians,
        encoder=TechnicianEncoder,
        safe=False,
    )

@require_http_methods(["DELETE", "GET"])
def api_show_appointments(request, id):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False
        )
    elif request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
    appointment = Appointment.objects.filter(pk=id).update(**content)
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False,
    )

@require_http_methods(["PUT", "GET"])
def api_list_canceled(request):
    if request.method == 'PUT':
        appointment = Appointment.objects.get('status')
        if appointment.status == 'pending':
            appointment.status = 'canceled'
            appointment.save()
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False,
    )

@require_http_methods(["PUT", "GET"])
def api_list_finished(request):
    if request.method == 'PUT':
        appointment = Appointment.objects.get('status')
        if appointment.status == 'pending':
            appointment.status = 'finished'
            appointment.save()

    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False,
    )
