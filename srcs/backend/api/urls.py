from django.urls import path
from .views import register, login, user

urlpatterns = [
    path("login/", login),
    path("register/", register),
    path("user/", user)
    
]