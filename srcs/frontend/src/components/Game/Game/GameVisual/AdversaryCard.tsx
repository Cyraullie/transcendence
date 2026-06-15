import { MeshPhongMaterial, TextureLoader } from "three";
import type { Texture, TextureEventMap } from "three";

type Props = {
  angle: number,
  distanceY: number,
  littleRadius: number, 
  textureBack: Texture<HTMLImageElement, TextureEventMap>,
  positionCard: number,
  totalPlayer: number
}

export default function AdversaryCard({angle, distanceY, littleRadius, textureBack, positionCard, totalPlayer} : Props){
  const materials = [
    new MeshPhongMaterial({color: 0xffffff}),
    new MeshPhongMaterial({color: 0xffffff}),
    new MeshPhongMaterial({color: 0xffffff}),
    new MeshPhongMaterial({color: 0xffffff}),
    new MeshPhongMaterial({color: 0xf345ab}),
    new MeshPhongMaterial({map: textureBack})
  ];

  return (
    <mesh
      rotation={[Math.PI / 2, 0, angle]}
      position={[-Math.sin(angle) * littleRadius, distanceY + 0.02 * positionCard, Math.cos(angle) * littleRadius - (0.5 * totalPlayer)]}
      material={materials}
    >
      <boxGeometry args={[1, 1.4, 0.001]}/>
      <axesHelper />
    </mesh>
  );
}