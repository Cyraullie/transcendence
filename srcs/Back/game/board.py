from card import Card
from player import Player
from player import Hand

class Board:
	def __init__(self):
		self.fold = []

	def legalCard(self, hands: Hand, playedCard: Card):
		if len(self.fold) == 0:
			return True 
		
		
