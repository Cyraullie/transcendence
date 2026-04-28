import type { accountT } from "../utils/accountType";
import { generateFakeHistory } from "../utils/generateTestHistory";
import type { historyT } from "../utils/historyType";

export function History() {
  const gameHistory = generateFakeHistory();

  return (
    <table className="mt-5">
      <tr>
        <th className="th-history">Game ID</th>
        <th className="w-40 text-left">Date</th>
        <th className="th-history">Your points</th>
        <th className="th-history">Your result</th>
        <th className="th-history">Time played</th>
        <th className="th-history">Nb players</th>
        <th className=" w-300 text-left">Players</th>
      </tr>
      {gameHistory.map((game: historyT) => (
        <tr
          className={
            (game.winned ? "bg-(--green-color)" : "bg-(--red-color)") +
            " text-black"
          }
        >
          <td>{game.gameId}</td>
          <td>{game.date}</td>
          <td>{game.points}</td>
          <td>{game.winned ? "winner" : "looser"}</td>
          <td>{game.timePlayed}</td>
          <td>{game.nbPlayers}</td>
          <td>
            {game.players.map((player: accountT) => (
              <a>{player.username}, </a>
            ))}
          </td>
        </tr>
      ))}
    </table>
  );
}
