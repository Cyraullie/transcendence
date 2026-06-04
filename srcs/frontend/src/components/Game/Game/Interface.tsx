import LeaderboardInGame from "./LeaderboardInGame";
import GameButtons from "./GameButtons";

export default function Interface() {
	return (
		<div className="w-1/4 h-full bg-green-900">
      <LeaderboardInGame />
      <GameButtons />
		</div>
	)
}
