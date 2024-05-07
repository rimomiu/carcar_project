from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from sales_rest.models import Customer, Sale, Salesperson, AutomobileVO
from django.core.exceptions import ObjectDoesNotExist


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]


class SalesPersonEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id", "id"]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = ["automobile", "salesperson", "customer", "id"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salesperson = Salesperson.objects.all()
        return JsonResponse({"salespeople": salesperson}, encoder=SalesPersonEncoder)
    else:
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Invalid"},
                status=400,
            )


@require_http_methods(["DELETE"])
def api_show_salespeople(request, id):
    if request.method == "DELETE":
        count, _ = Salesperson.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse({"customers": customers}, encoder=CustomerEncoder)
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Invalid"},
                status=400,
            )


@require_http_methods(["DELETE"])
def api_show_customer(request, id):
    if request.method == "DELETE":
        count, _ = Customer.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_sales(request, automobile_vo_id=None):
    if request.method == "GET":
        if automobile_vo_id is not None:
            sales = Sale.objects.filter(automobile=automobile_vo_id)
        else:
            sales = Sale.objects.all()
        return JsonResponse({"sales": sales}, encoder=SaleEncoder)
    else:
        content = json.loads(request.body)

        try:
            salesperson = Salesperson.objects.get(first_name=content["salesperson"])
            content["salesperson"] = salesperson
        except:
            return JsonResponse(
                {"message": "Invalid salesperson"},
                status=400,
            )

        try:
            customer = Customer.objects.get(first_name=content["customer"])
            content["customer"] = customer
        except:
            return JsonResponse(
                {"message": "Invalid customer"},
                status=400,
            )

        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_show_sales(request, id):
    if request.method == "DELETE":
        count, _ = Sale.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})
