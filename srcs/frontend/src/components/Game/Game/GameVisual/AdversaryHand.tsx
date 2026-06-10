import { useThree } from "@react-three/fiber";
import AdversaryCard from "./AdversaryCard";
import type { adversaryT } from "../../../../utils/type/adversaryType";
import type { Texture, TextureEventMap } from "three";

type Props = {
  cardHand: adversaryT, 
  textureBack: Texture<HTMLImageElement, TextureEventMap>,
  total: number
}

export default function AdversaryHand({cardHand, textureBack, total} : Props) {
  const { viewport } = useThree();
  const spaceBetween = 0.07;
  const distanceStart = viewport.height / 2 + 0.3 - (cardHand.nbCards - 1) * spaceBetween / 2 + spaceBetween;
  const angleStart = (360* (cardHand.position + 1) /total) * (Math.PI / 180) - (cardHand.nbCards - 1) * spaceBetween / 2;
  const allAngle : number[] = [];
  for (let i = 0; i < cardHand.nbCards; i++)
    allAngle.push(angleStart + i * spaceBetween);

  return (
    <>
      {allAngle.map((angle) => {
        return (
          <AdversaryCard distance={distanceStart + allAngle.indexOf(angle) * spaceBetween } angle={angle} textureBack={textureBack}/>
        );
      })}
    </>
  );
}