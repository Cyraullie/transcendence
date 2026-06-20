import { TbClubsFilled } from "react-icons/tb"
import { TiHeartFullOutline } from "react-icons/ti"
import { BsFillSuitDiamondFill, BsFillSuitSpadeFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";


	function DisplayTrumpLogo({trump}: {trump:string}) {
		if (trump === "club") {
			return <TbClubsFilled />
		}
		else if (trump === "heart")
			return <TiHeartFullOutline />
		else if (trump === "diamond")
			return <BsFillSuitDiamondFill />
		else if (trump === "spade")
			return <BsFillSuitSpadeFill />
		else
			return <FaQuestion />
	}

export default function CurrentInfo() {
	const trump = "heart"

	return (
		<div className="border-t mt-4 w-full">
			<p className="flex items-center">Atout: <DisplayTrumpLogo trump={trump}/> </p>
			<p>Your turn: 4</p>
		</div>
	)
}
