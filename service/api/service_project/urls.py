"""service_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from service_rest.views import api_list_technicians, api_list_appointments, api_show_technicians, api_show_appointments, api_list_cancelled, api_list_finished

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/technicians/', api_list_technicians, name = "api_list_technicians"),
    path('api/technicians/<int:id>/', api_show_technicians, name = "api_show_technicians"),
    path('api/appointments/', api_list_appointments, name = "api_list_appointments"),
    path('api/appointments/<int:id>/', api_show_appointments, name = "api_show_appointments"),
    path('api/appointments/<int:id>/cancel/', api_list_cancelled, name = "api_list_cancelled"),
    path('api/appointments/<int:id>/finish/', api_list_finished, name = "api_list_finished")
]
