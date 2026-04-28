from django.urls import path
from .views.room_views import CreateRoomView


urlpatterns = [
    path('rooms/', CreateRoomView.as_view(), name='create-room'),
]