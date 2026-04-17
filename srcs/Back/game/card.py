class Card:
	def __init__(self, values, colors):
		self.values = values
		self.colors = colors

	def print(self):
		print(self.values, "|", self.colors)