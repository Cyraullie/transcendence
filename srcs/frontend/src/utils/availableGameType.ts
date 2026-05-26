export type availableGameT = {
  id: number;
  code: string;
  nb_player: number;
  list_player: {
    username: string;
  }[];
  host: string;
};
