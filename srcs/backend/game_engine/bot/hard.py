from medium import takeFold
from ..card import Card
from ..player import Player

cardPoint = {"6": 0, "7": 0, "8": 0, "9": 0, "10": 10, "J": 2, "Q": 3, "K": 4, "A": 11}
tricksValue = {"6": 0, "7": 1, "8": 2, "10": 3, "Q": 4, "K": 5, "A": 6, "9": 7, "J": 8}

def splithand(data, idPlayer, legal):
	playable = []
	tricks = data["tricks"]
	fold = data["board"].copy()
	asked = fold.pop("asked")

	i = 0
	while (i < len(legal)):
		if (legal[i]):
			playable.append(data["players"][idPlayer]["cards"][i])
		i += 1

	take = []
	dontTake = []
	for c in playable:
		if (takeFold(fold, asked, tricks, c)):
			take.append(c)
		else:
			dontTake.append(c)

	return take, dontTake

def Tricks(data: dict, tricks: str):
	played = []
	playedTricks = 0

	for p in data["players"]:
		for c in p["taken"]:
			if (c["color"] == tricks):
				playedTricks += 1
				played.append(Card(c["value"], c["color"]))
	
	played = sorted(played)
	
	first = "none1" 
	second = "none2"
	for v in tricksValue.keys():
		if (Card(v, tricks) not in played):
			second = first
			first = v

	return first, second, playedTricks

def boardPoints(data: dict, board):
	points = 0
	for c in board:
		if (c["color"] == data["tricks"]):
			if (c["value"] == "J"):
				points += 20
				continue
			elif (c["value"] == "9"):
				points += 14
				continue
		points += cardPoint[c["value"]]

	points += Player.countMelds(Player(), board, data["tricks"])
	return points

def hard(data: dict, idPlayer, legal):
	take, dontTake = splithand(data, idPlayer, legal)

	first, second, playedTricks = Tricks(data, data["tricks"])
	board = data["board"].copy()
	board.pop("asked")
	points = boardPoints(data, board)

	for c in take:
		if (c["color"] == data["tricks"]):
			if (c["value"] == first and points <= 20):
				return data["players"][idPlayer]["cards"].index(c)

			if (c["value"] == second and points <= 10):
				return data["players"][idPlayer]["cards"].index(c)

	if (len(dontTake) > 0):
		maxPoint = 0
		for c in dontTake:
			newBoard = board.copy()
			newBoard.append(c)
			newPoints = boardPoints(data, newBoard)
			if (newPoints >= maxPoint):
				card = c
				maxPoint = newPoints

		return data["players"][idPlayer]["cards"].index(card)

	maxPoint = 0
	for c in take:
		newBoard = board.copy()
		newBoard.append(c)
		newPoints = boardPoints(data, newBoard)
		if (newPoints < maxPoint):
			card = c
			maxPoint = newPoints

	return data["players"][idPlayer]["cards"].index(card)