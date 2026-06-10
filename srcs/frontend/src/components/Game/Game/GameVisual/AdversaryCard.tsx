import { MeshPhongMaterial, TextureLoader } from "three";
import type { Texture, TextureEventMap } from "three";

export default function AdversaryCard({angle, distance, textureBack} : {angle: number, distance: number, textureBack: Texture<HTMLImageElement, TextureEventMap>}) {
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
      rotation={[Math.PI / 2, angle, 0]}
      position={[Math.sin(angle) * distance, -Math.cos(angle) * distance, 1]}
      material={materials}
    >
      <boxGeometry rotateX={Math.PI} args={[1, 1.4, 0.01]}/>
    </mesh>
  );
}