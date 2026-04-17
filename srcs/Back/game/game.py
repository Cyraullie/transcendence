from player import Player
from card import Card
from board import Board
from deck import Deck


class Game:
	def __init__(self, playersList):
		self.indexPlayer = -1
		self.players = playersList
		self.board = Board()

	def __cardDistribution(self):
		deck = Deck()
		while deck.remaining() > len(self.players):
			for p in self.players:
				card = deck.drawRandom()
				p.drawCard(card)
		lastCard = Card(-1, "other")
		if deck.remaining() > 0:
			lastCard = deck.drawRandom()
		return lastCard
			
	def __find7Diamond(self):
		for p in self.players:
			for c in p.hands.cards:
				if c.colors == "diamond" and c.values == "7":
					return p
	
	def setupGame(self):
		self.lastCard = self.__cardDistribution()
		while self.lastCard.values == "7" and self.lastCard.colors == "diamond":
			for p in self.players:
				p.clearHand
			self.__cardDistribution()
		p = self.__find7Diamond()
		self.indexPlayer = self.players.index(p)
		self.startingPlayer = self.indexPlayer

	def printGameInfo(self):
		for p in self.players:
			p.print()
		print("last card:")
		self.lastCard.print()
		print("player who start:")
		print(self.startingPlayer)