from card import Card

class Hand:
	def __init__(self):
		self.cards = []
		self.numbers = { "club": 0, "spade": 0, "diamond": 0, "hearth": 0}

	def draw(self, card: Card):
		if card.colors in self.numbers:
			self.numbers[card.colors] += 1
			self.cards.append(card)

	def remove(self, card: Card):
		try:
			self.cards.remove(card)
		except ValueError:
			print("Error: card not found in hand")
		except:
			if card.colors in self.numbers:
				if self.numbers[card.colors] > 0:
					self.numbers[card.colors] -= 1

class Player:
	def __init__(self, id: int):
		self.id = id
		self.hands = Hand()

	def drawCard(self, card: Card):
		self.hands.draw(card)

	def playCard(self, card: Card):
		self.hands.remove(card)