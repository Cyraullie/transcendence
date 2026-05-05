trickValue = {"6": 0, "7": 1, "8": 2, "10": 3, "Q": 4, "K": 5, "A": 6, "9": 7, "J": 8}
cardValue = {"6": 0, "7": 1, "8": 2, "9": 3, "10": 4, "J": 5, "Q": 6, "K": 7, "A": 8}

def strongestCard(asked, fold, tricks):
	strongest = {"value": "-1", "color": "none"}
	for c in fold:
		if (c == fold[0]):
			strongest = c
			continue
		if (c["color"] != tricks and c["color"] != asked["color"]):
			continue
		if (c["color"] == tricks):
			if (strongest["color"] == tricks):
				if (trickValue[c["value"]] > trickValue[strongest["value"]]):
					strongest = c
				continue
			strongest = c
			continue
		else:
			if (strongest["color"] == tricks):
				continue
			if (cardValue[c["value"]] > cardValue[strongest["value"]]):
				strongest = c
			continue
	return strongest

def takeFold(fold, asked, tricks, card):
	copy = fold.copy
	copy.append(card)
	strongest = strongestCard(asked, fold, tricks)

	if (strongest["value"] == card["value"] and 
		strongest["color"] == card["color"]):
		return True

	return False

def medium(data: dict, idPlayer, legal):
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

	if (len(dontTake) > 0):
		dontTake = sorted(dontTake)
		index = data["players"][idPlayer]["cards"].index(dontTake[len(dontTake - 1)])
	else:
		take = sorted(take)
		index = data["players"][idPlayer]["cards"].index(take[0])

	return index