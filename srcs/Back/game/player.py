from card import Card

class Hand:
	def __init__(self):
		self.cards = []
		self.numbers = { "club": 0, "spade": 0, "diamond": 0, "heart": 0}

	def draw(self, card: Card):
		if card.colors in self.numbers:
			self.numbers[card.colors] += 1
			self.cards.append(card)

	def remove(self, card: Card):
		try:
			self.cards.remove(card)
		except ValueError:
			print("Error: card not found in hand")
		else:
			if card.colors in self.numbers:
				if self.numbers[card.colors] > 0:
					self.numbers[card.colors] -= 1

	def remaining(self):
		return len(self.cards)

	def print(self):
		for c in self.cards:
			c.print()
		print("\n")

class Player:
	def __init__(self, id: int):
		self.id = id
		self.takenFold = []
		self.points = 0
		self.hands = Hand()
		self.trickPoints = {"6": 0, "7": 0, "8": 0, "10": 10, "Q": 3, "K": 4, "A": 11, "9": 14, "J": 20}
		self.cardPoints = {"6": 0, "7": 0, "8": 0, "9": 0, "10": 10, "J": 2, "Q": 3, "K": 4, "A": 11}
		self.cardValue = {"6": 0, "7": 1, "8": 2, "9": 3, "10": 4, "J": 5, "Q": 6, "K": 7, "A": 8}
		self.suitePoint = {3: 20, 4: 50, 5: 100, 6: 150, 7: 200, 8: 250, 9: 300}

	def drawCard(self, card: Card):
		self.hands.draw(card)

	def playCard(self, card: Card):
		self.hands.remove(card)

	def clearHand(self):
		self.hands = Hand()

	def remainingCard(self):
		return self.hands.remaining()

	def takeFold(self, fold: list[Card]):
		copy = fold.copy()
		self.takenFold.append(copy)

	def findSuit(self, bucket: dict[str, Card]):
		for b in bucket.values():
			if (len(b) >= 3):
				b = sorted(b)
				value = 0
				suite = 1
				for c in b:
					if (value == 0):
						value = self.cardValue[c.values]
						continue
					if (self.cardValue[c.values] == value + 1):
						value += 1
						suite += 1
					else:
						if (suite > 2):
							self.points += self.suitePoint[suite]
						value = 0
						value = 1
				if (suite > 2):
					self.points += self.suitePoint[suite]

	def countMelds(self, fold: list[Card]):
		clubs = []
		spades = []
		diamonds = []
		hearts = []
		bucket = {"club": clubs, "spade": spades, "diamond": diamonds, "heart": hearts}

		for c in fold:
			cList = bucket[c.colors]
			cList.append(c)

		self.findSuit(bucket)
		for c in clubs:
			if (c in spades and c in diamonds and c in hearts):
				if (c.values == "J"):
					self.points += 200
				elif (c.values == "9"):
					self.points += 150
				else:
					self.points += 100

	def countPoint(self, tricks: str):
		for fold in self.takenFold:
			self.countMelds(fold)
			for c in fold:
				if (c.colors == tricks):
					self.points += self.trickPoints[c.values]
				else:
					self.points += self.cardPoints[c.values]

	def print(self):
		print("Player ", self.id, ", points = ", self.points, " :")
		self.hands.print()
		# print("\n")
