// import generateFakeBoard from "../../../../utils/test_funcs/generateFakeBoard";
import Adversary from "./Adversary";
import PlayedCard from "./PlayedCard";
// import generateFakeAdversary from "../../../../utils/test_funcs/generateFakeAdversary";
import { Texture, type TextureEventMap } from "three";
import { useGame } from "../../context/GameContext";

export default function Board({back} : {back: Texture<HTMLImageElement, TextureEventMap>}) {
  
//   const cards = generateFakeBoard();
  const { state } = useGame();
  const cards = state.game.boardData.board;
  const adversaries = state.game.boardData.player_list;
  const idPlayer = Number(state.game.boardData.self_id);
  const obj = adversaries as Record<string, unknown>;
  const totalPlayer = Object.keys(obj).length;
  const boardRadius = 3;


  return (
    <>
      <mesh rotation={[-0.4, 0, 0]} position={[0, 0.5, -2]}>
        <circleGeometry args={[boardRadius, 50]}/>
        <meshStandardMaterial color={"#7d02b4"}/>
        {cards.map((card) => {
          return (
            <>
              <PlayedCard card={card.card.value + card.card.color} id={(card.room_id - idPlayer) % totalPlayer} total={totalPlayer}/>
            </>
        );})}
        {Object.entries(adversaries).map((adversary) => {

			if (Number(adversary[0]) === idPlayer || idPlayer === -1) {
				return null;
			}

			const position =  (((Number(adversary[0]) - idPlayer) % totalPlayer) + totalPlayer) % totalPlayer;
          return(
            <>
              <Adversary cardHand={{position: position, nbCards: adversary[1].hand}} back={back} totalPlayer={totalPlayer} boardRadius={boardRadius}/>
            </>
          );
        })}
      </mesh>
    </>
  );
}
