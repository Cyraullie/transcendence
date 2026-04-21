import json
from channels.generic.websocket import AsyncWebsocketConsumer


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        try:
            data = json.loads(text_data)
            message = data.get("message", "")

            await self.send(text_data=json.dumps({
                "message": message
            }))
        except json.JSONDecodeError:
            await self.send(text_data=json.dumps({
                "error": "Invalid JSON"
            }))


class RoomConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.code = self.scope["url_route"]["kwargs"]["code"]
        self.group_name = f"room_{self.code}"

        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )

        await self.accept()

        # (optionnel mais utile) notifier join
        await self.channel_layer.group_send(
            self.group_name,
            {
                "type": "room_message",
                "message": "user_joined",
                "user": self.get_username()
            }
        )

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

        # (optionnel) notifier leave
        await self.channel_layer.group_send(
            self.group_name,
            {
                "type": "room_message",
                "message": "user_left",
                "user": self.get_username()
            }
        )

    async def receive(self, text_data):
        try:
            data = json.loads(text_data)
            message = data.get("message")

            if not message:
                return

            await self.channel_layer.group_send(
                self.group_name,
                {
                    "type": "room_message",
                    "message": message,
                    "user": self.get_username()
                }
            )
        except json.JSONDecodeError:
            await self.send(text_data=json.dumps({
                "error": "Invalid JSON"
            }))

    async def room_message(self, event):
        await self.send(text_data=json.dumps({
            "message": event["message"],
            "user": event["user"]
        }))

    def get_username(self):
        user = self.scope.get("user")
        return user.username if user and user.is_authenticated else "anonymous"