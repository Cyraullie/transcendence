import type { availableGameT } from "../availableGameType";

export function createFakeGame(): availableGameT[] {
  return [
    {
      id: 0,
      code: "phil123",
      nb_player: 7,
      list_player: [
        {
          username: "philou",
        },
        {
          username: "phistule",
        },
        {
          username: "philipe",
        },
        {
          username: "phibonacci",
        },
        {
          username: "phiphi",
        },
        {
          username: "phuck",
        },
      ],
      host: "philipe",
    },
    {
      id: 1,
      code: "fred123",
      nb_player: 4,
      list_player: [
        {
          username: "fredo",
        },
        {
          username: "frederic",
        },
        {
          username: "fredouane",
        },
        {
          username: "fredpayment",
        },
      ],
      host: "frederic",
    },
    {
      id: 2,
      code: "anne123",
      nb_player: 5,
      list_player: [
        {
          username: "anna",
        },
        {
          username: "annesthesie",
        },
        {
          username: "annick",
        },
      ],
      host: "anna",
    },
    {
      id: 3,
      code: "clem123",
      nb_player: 6,
      list_player: [
        {
          username: "clemence",
        },
        {
          username: "clementine",
        },
        {
          username: "clement",
        },
        {
          username: "clemercestcquiyadplubo",
        },
      ],
      host: "clementine",
    },
    {
      id: 4,
      code: "al123",
      nb_player: 3,
      list_player: [
        {
          username: "alain",
        },
        {
          username: "alapecheaumoulemoulemoulejenveuxplusyallermaman",
        },
        {
          username: "alana",
        },
      ],
      host: "alana",
    },
    {
      id: 5,
      code: "six123",
      nb_player: 6,
      list_player: [
        {
          username: "sixtine",
        },
        {
          username: "sixto",
        },
        {
          username: "sixta",
        },
        {
          username: "sixte",
        },
        {
          username: "sixseveeeeeeeeen",
        },
      ],
      host: "sixte",
    },
    {
      id: 6,
      code: "ki123",
      nb_player: 4,
      list_player: [
        {
          username: "kirikou",
        },
        {
          username: "kilian",
        },
        {
          username: "kishta",
        },
        {
          username: "kicestquiecritcesprenomdemerde",
        },
      ],
      host: "kirikou",
    },
  ];
}
