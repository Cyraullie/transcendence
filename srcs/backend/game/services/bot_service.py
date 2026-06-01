from asgiref.sync import sync_to_async
from ..models import PlayerPresence
#from .game_service import GameService
#
#
#class BotService:
#
#    @staticmethod
#    async def run_if_needed(room):
#        presence = await sync_to_async(PlayerPresence.objects.get)(
#            room=room,
#            position=room.game_state["playing"]
#        )
#
#        if presence.is_human:
#            return
#
#        # boucle bot
#        game_state = room.game_state
#
#        while True:
#            presence = await sync_to_async(PlayerPresence.objects.get)(
#                room=room,
#                position=game_state["playing"]
#            )
#
#            if presence.is_human:
#                break
#
#            legal = GameEngine(room.uuid).handleAction(
#                "legal",
#                game_state,
#                idPlayer=str(game_state["playing"])
#            )
#
#            card_id = BotService.choose_card(game_state, legal, presence.difficulty)
#
#            result = await GameService.play_card(
#                room,
#                presence.player,
#                game_state["playing"],
#                card_id
#            )
#
#            if result.get("error"):
#                break
#
#            game_state = result["state"]
#
#    @staticmethod
#    def choose_card(state, legal, difficulty):
#        # ton AI ici
#        return 0