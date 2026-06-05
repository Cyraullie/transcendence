import { useLoader, type ThreeElements } from "@react-three/fiber";
import { useState } from "react";
import { MeshPhongMaterial, TextureLoader } from "three";
import { loadTexture } from "../../../../utils/imports/textures";
import test from "../../../../assets/cards/ASpades.png";

export default function PCard(props: ThreeElements["mesh"]) {
  const [active, setActive] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  return (
    <mesh
      {...props}
      onClick={() => setActive(!active)}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      scale={active ? 1.5 : 1}
      rotation={[0, 0, 0]}
    >
      <boxGeometry args={[1, 1.4, 0.03]} />
    </mesh>
  );
}
