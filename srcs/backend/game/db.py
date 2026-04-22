from asgiref.sync import sync_to_async
from .models import PlayerPresence, Room

@sync_to_async
def add_player_to_room(user, code):
    try:
        room = Room.objects.get(code=code)

        # 🟡 si la partie est startée
        if room.is_started:
            # 🔥 vérifier que le joueur faisait déjà partie de la room
            exists = PlayerPresence.objects.filter(
                player=user,
                room=room
            ).exists()

            if not exists:
                return False  # refuse connexion

            # sinon OK (reconnect)
            PlayerPresence.objects.filter(
                player=user,
                room=room
            ).update(is_online=True)

            return True

        # 🟢 room pas start → join normal
        PlayerPresence.objects.get_or_create(
            player=user,
            room=room
        )

        return True

    except Room.DoesNotExist:
        return False

@sync_to_async
def remove_player_from_room(user, code):
    try:
        room = Room.objects.get(code=code)
        if room.is_started:
            PlayerPresence.objects.filter(
                player=user,
                room=room
            ).update(is_online=False)
            return
        PlayerPresence.objects.filter(player=user, room=room).delete()
    except Room.DoesNotExist:
        pass


@sync_to_async
def get_room_with_host(code):
    return Room.objects.select_related("host").get(code=code)


