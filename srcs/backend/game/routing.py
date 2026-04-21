
from django.urls import re_path
from .consumers import ChatConsumer, RoomConsumer


websocket_urlpatterns = [
    re_path(r'ws/chat/$', ChatConsumer.as_asgi()),
    re_path(r'ws/room/(?P<code>\w+)/$', RoomConsumer.as_asgi())
]