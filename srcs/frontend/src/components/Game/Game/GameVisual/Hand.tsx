import { log, MeshPhongMaterial, TextureLoader } from "three";
import PCard from "./PCard";
import { loadTexture } from "../../../../utils/imports/textures";
import { useLoader } from "@react-three/fiber";
import generateFakeHandCards from "../../../../utils/test_funcs/generateFakeHandCards";

export default function Hand() {
  const back = useLoader(TextureLoader, loadTexture("back")!)
  const hand = generateFakeHandCards();
  const loadTextures = hand.cards.forEach((card) => {

  })

  function CustomLoader(name: string ) {
	  return useLoader(TextureLoader, name!)
  }
  return (
    <mesh>
	{hand.cards.map((card) => {
		const front = CustomLoader(card.value + card.color);
		console.log(card.value + card.color)
		const materials = [
			new MeshPhongMaterial({color: 0xffffff}),
			new MeshPhongMaterial({color: 0xffffff}),
			new MeshPhongMaterial({color: 0xffffff}),
			new MeshPhongMaterial({color: 0xffffff}),
			new MeshPhongMaterial({map: front}),
			new MeshPhongMaterial({map: back}),
		]

		return (

			<PCard position={[0, -1, 0]} material={materials}/>
		)
	})}
    </mesh>
  );
}
