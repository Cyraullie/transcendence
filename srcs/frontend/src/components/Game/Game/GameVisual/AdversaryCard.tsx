import { MeshPhongMaterial, TextureLoader } from "three";
import type { Texture, TextureEventMap } from "three";

type Props = {
  angleY: number, 
  angleZ: number, 
  distance: number, 
  textureBack: Texture<HTMLImageElement, TextureEventMap> 
}

export default function AdversaryCard({angleY, angleZ, distance, textureBack} : Props){
  const materials = [
    new MeshPhongMaterial({color: 0xffffff}),
    new MeshPhongMaterial({color: 0xffffff}),
    new MeshPhongMaterial({color: 0xffffff}),
    new MeshPhongMaterial({color: 0xffffff}),
    new MeshPhongMaterial({map: textureBack}),
    new MeshPhongMaterial({map: textureBack})
  ];

  return (
    <mesh
      rotation={[Math.PI / 2, angleY, angleZ]}
      position={[0, 0, 0]}
      material={materials}
    >
      <boxGeometry args={[1, 1.4, 0.01]}/>
      <axesHelper />
    </mesh>
  );
}