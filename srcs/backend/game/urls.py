from django.urls import path
from .views.room_views import create_room, add_bot, list_public_room


urlpatterns = [
    path('rooms/', create_room, name='create-room'),
    path('rooms/<str:code>/add_bot/', add_bot, name='add-bot'),
    path('rooms/public/', list_public_room, name='add-bot'),
]