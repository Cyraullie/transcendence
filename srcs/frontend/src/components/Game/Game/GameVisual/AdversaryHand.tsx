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
  const angleBetween = 360 / cardHand.nbCards * Math.PI / 180;
  const distanceBetweenCard = 0.3;
  const distanceCenter = viewport.height / 2 + 0.3;
  const angleCenter = (360* (cardHand.position + 1) /total) * (Math.PI / 180);
  const allAngle : number[] = [];
  for (let i = 0; i < cardHand.nbCards; i++)
    allAngle.push(angleCenter + i * angleBetween);

  return (
    <mesh
    >
      {allAngle.map((angle) => {
        return (
          <AdversaryCard distance={0} angleY={angle} angleZ={angleBetween} textureBack={textureBack}/>
        );
      })}
    </mesh>
  );
}