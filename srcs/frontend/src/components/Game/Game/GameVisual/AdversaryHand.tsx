import AdversaryCard from "./AdversaryCard";
import type { adversaryT } from "../../../../utils/type/adversaryType";
import type { Texture, TextureEventMap } from "three";

type Props = {
  angleCenter:number,
  cardHand: adversaryT, 
  textureBack: Texture<HTMLImageElement, TextureEventMap>
  totalPlayer:number,
}

export default function AdversaryHand({angleCenter, cardHand, textureBack, totalPlayer} : Props) {
  const angleBetween = Math.PI / 30;
  const littleRadius = Math.sin(angleCenter / 2) * 3;
  const angleStart = - (cardHand.nbCards - 1) * angleBetween / 2;
  const allAngle : number[] = [];
  for (let i = 0; i < cardHand.nbCards; i++)
    allAngle.push(angleStart + i * angleBetween);

  console.log("little radius" + littleRadius);
  console.log("cos" + Math.cos(angleCenter * (cardHand.position + 1)));
  return (
      <mesh
      >
        {allAngle.map((angle) => {
          return (
            <AdversaryCard
              littleRadius={littleRadius}
              distanceY={Math.cos(angleCenter * (cardHand.position + 1)) * littleRadius}
              positionCard={allAngle.indexOf(angle)}
              textureBack={textureBack}
              angle={angle}
              totalPlayer={totalPlayer}
            />
          );
        })}
      </mesh>
  );
}
