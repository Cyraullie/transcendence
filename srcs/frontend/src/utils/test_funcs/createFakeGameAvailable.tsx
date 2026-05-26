import type { availableGameT } from "../availableGameType";

export function createFakeGame(): availableGameT[] {
	return [
		{
			id: 0,
			code: "caca123",
			nb_player: 3,
			list_player: [
				{
					username: "philou",
				},
				{
					username: "phistule",
				},
			],

		}
	]
}
