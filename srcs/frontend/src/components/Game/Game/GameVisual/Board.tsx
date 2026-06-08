import generateFakeBoard from "../../../../utils/test_funcs/generateBoard";
import type { boardT } from "../../../../utils/type/boardType";
import PlayedCard from "./PlayedCard";

export default function Board() {
  const cards = generateFakeBoard();
  const idPlayer = 2;

  return (
    <mesh rotation={[-0.4, 0, 0]} position={[0, 0.5, 0]}>
      <circleGeometry args={[3, 50]}/>
      <meshStandardMaterial color={"#7d02b4"}/>
      {cards.map((card) => {
        return (
          <PlayedCard card={card.card} id={(card.id - idPlayer) % 4} total={cards.length}/>
      );})}
    </mesh>
  );
}
