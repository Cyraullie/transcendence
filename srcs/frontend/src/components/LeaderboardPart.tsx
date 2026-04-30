import { generateFakeLeaderboard } from "../utils/generateTestLeaderboard";

export function LeaderboardPart() {
  const data = generateFakeLeaderboard();
  const leaderboard = data.leaderboard;
  const current = data.current;

  return (
    <table className="w-full">
      <thead className="w-full">
        <th className="w-1/3">rank</th>
        <th className="w-1/3">Username</th>
        <th className="w-1/3">Score</th>
      </thead>
      <tbody className="bg-(--hover-color)">
        {leaderboard.map((player) => (
          <tr className="h-10 border-y border-(--bg-color)">
            <td className="text-center">{leaderboard.indexOf(player) + 1}</td>
            <td className="text-center">{player.username}</td>
            <td className="text-center">{player.score}</td>
          </tr>
        ))}
        <tr className="bg-(--nav-color) h-12">
          <td className="text-center">{current.rank}</td>
          <td className="text-center">{current.username}</td>
          <td className="text-center">{current.score}</td>
        </tr>
      </tbody>
    </table>
  );
}
