from django.urls import path
from . import views

urlpatterns = [
    path('', views.getUsers),
    path('user/<str:pk>', views.getUser),
    path('create-user', views.createUser),
    path('update-user/<str:pk>', views.updateUser),
    path('delete-user/<str:pk>', views.deleteUser),
]  