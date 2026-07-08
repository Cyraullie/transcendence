import { Canvas, useLoader } from "@react-three/fiber";
import Hand from "./GameVisual/Hand";
import Board from "./GameVisual/Board";
import generateDeck from "../../../utils/createDeck";
import { loadTexture } from "../../../utils/imports/textures";
import { AxesHelper, TextureLoader } from "three";

// import { OrbitControls } from "@react-three/drei";
const bgimg = "/assets/bg_game.png"

export default function GameVisual() {
  const deck = generateDeck();
  const loadedTextures: string[] = [];
  const back = useLoader(TextureLoader, loadTexture("back")!);
  deck.forEach((card) => {
    loadedTextures.push(loadTexture(card.value + card.color)!);
  });
  const cardsTex = useLoader(TextureLoader, loadedTextures);
  const boardRadius = 2.3;
  const distanceBoard = boardRadius * 3 / 5;

  return (
    <Canvas className="w-3/4 bg-cover rounded-2xl" style={{ backgroundImage: `url(${bgimg})` }}>
      <axesHelper/>
      {/* <directionalLight position={[0, 5, 0]} intensity={1.2} color={"#454988"}/>
      <spotLight position={[0, 5, 5]} intensity={20} angle={10} color={"#c7a089"}/> */}
      <ambientLight intensity={1} color={"#2c251bf1"}/>
      <Board front={cardsTex} back={back} boardRadius={boardRadius} distanceBoard={distanceBoard} />
      <Hand cardsTex={cardsTex} back={back} distanceBoard={distanceBoard} />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
