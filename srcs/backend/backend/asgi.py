import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import game.routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
print("ASGI LOADED")
application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": URLRouter(
        game.routing.websocket_urlpatterns
    ),
})