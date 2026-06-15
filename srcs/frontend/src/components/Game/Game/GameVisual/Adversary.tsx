import type { Texture, TextureEventMap } from "three";
import type { adversaryT } from "../../../../utils/type/adversaryType";
import AdversaryHand from "./AdversaryHand";

type Props = {
  cardHand: adversaryT, 
  textureBack: Texture<HTMLImageElement, TextureEventMap>,
  totalPlayer: number
}

export default function Adversary({cardHand, textureBack, totalPlayer} : Props) {
  const angleCenter = 360 / totalPlayer * Math.PI / 180;
  const distance = Math.cos(angleCenter / 2) * 3;

  return (
      <mesh
        rotation={[0, 0, angleCenter * (cardHand.position + 1)]}
        position={[distance * Math.sin(angleCenter * (cardHand.position + 1)) * 3, distance *  -Math.cos(angleCenter * (cardHand.position + 1)) * 3, 0]}
      >
          <AdversaryHand
            angleCenter={angleCenter}
            cardHand={cardHand}
            textureBack={textureBack}
            totalPlayer={totalPlayer}
          />
      </mesh>
  );
}
//  * 
//  * 