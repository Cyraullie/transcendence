from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from api.auth.authentication import OptionalJWTAuthentication
from ..models import Room, PlayerPresence
from api.models import User
from ..serializers import RoomSerializer
from ..db import add_bot_to_room
import uuid

@api_view(["POST"])
@authentication_classes([OptionalJWTAuthentication])
@permission_classes([IsAuthenticated])
def create_room(request):
    private = request.data.get("private")
    if private == None:
        private = 0
    room_code = str(uuid.uuid4())[:8]
    room = Room.objects.create(
        code=room_code,
        host=request.user,
        is_private=private,
    )
    return Response(RoomSerializer(room).data, status=201)

@api_view(["POST"])
@authentication_classes([OptionalJWTAuthentication])
@permission_classes([IsAuthenticated])
def add_bot(request, code):
    room = Room.objects.get(
        code=code
    )
    
    if (room.nb_player == 7):
        return Response(
            {"message": "too many player in that room"},
            status= 401
        )
        
    if (room.host == request.user):
        last_bot = PlayerPresence.objects.filter(is_human=False, room=room).last()
        if (last_bot == None):
            user = User.objects.get(username= "BOT")
        else:
            user = User.objects.get(id= int(last_bot.player_id))
            
            result = user.username.removeprefix("BOT")
            if (result == ""):
                nbr = 0
            else:
                nbr = int(result) + 1
            user = User.objects.get(username= f"BOT{nbr}")
        add_bot_to_room(user, code)
        room = Room.objects.get(
            code=code
        )
        ret = {}
        
        for i in range(room.nb_player):
            p =  PlayerPresence.objects.get(
                room=room,
                position= i
            )
            user = User.objects.get(id=p.player_id)
            ret[str(i)] = user.username
        return Response(ret, status=201)
    
    return Response(
        {"error": "You are not the host. BAD"},
        status=401
    )

#TODO list start room with player presence
#TODO vote in game to ban a player
#TODO host can kick player when room's status open

@api_view(["GET"])
@authentication_classes([OptionalJWTAuthentication])
@permission_classes([IsAuthenticated])
def list_public_room(request):
    rooms = Room.objects.filter(
        is_private=0,
        status="open"
    )
    data = []
    
    for room in rooms:
        players = PlayerPresence.objects.filter(
			room=room
		)
        list_player = [
			{
				"username": player.player.username,
			}
            for player in players
		]
        data.append(
            {
                "id": room.id,
                "code": room.code,
                "nb_player": room.nb_player,
                "list_player": list_player,
                "host": room.host.username,
            }
		)
    
    return Response(data, status=200)

#TODO list of room with friends inside
