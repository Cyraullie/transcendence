import generateFakeBoard from "../../../../utils/test_funcs/generateFakeBoard";
import Adversary from "./Adversary";
import PlayedCard from "./PlayedCard";

export default function Board() {
  const cards = generateFakeBoard();
  const idPlayer = 3;
  const totalPlayer = cards.length;


  return (
    <>
      <Adversary />
      <mesh rotation={[-0.4, 0, 0]} position={[0, 0.5, -2]}>
        <circleGeometry args={[3, 50]}/>
        <meshStandardMaterial color={"#7d02b4"}/>
        {cards.map((card) => {
          return (
            <>
              {card.position === idPlayer ? "" : (
                <>
                  <PlayedCard card={card.card.value + card.card.color} id={(card.position - idPlayer) % totalPlayer} total={totalPlayer}/>
                </>
              )}
            </>
        );})}
      </mesh>
    </>
  );
}
