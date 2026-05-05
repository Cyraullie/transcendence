import random

# si le bot il bloque faut changer tkt

def easy(legal):
	lens = len(legal)
	rand = random.randint(0, lens - 1)
	while (not legal[rand]):
		rand = random.randint(0, lens - 1)
	return rand
