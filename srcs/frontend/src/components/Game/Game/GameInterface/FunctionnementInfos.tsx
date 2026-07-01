import { GiCardPlay } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function FunctionnementInfos() {
  return (
    <div className="flex justify-center dropdown-scroll ">
      <ul>
        <li >You have 15 seconds to play.</li>
        <li className="pt-2">If you don't play three times in a row for you, you're going to be kicked out of the room.</li>
        <li className="pt-2">Click on the card you want to play then click on it again to confirm your choice.</li>
        <li className="pt-2 flex items-center gap-4"><GiCardPlay className="scale-200"/> to see the last fold.</li>
        <li className="pt-2 flex items-center gap-4"><GrAnnounce className="scale-200"/> for an annonce on the first fold.</li>
        <li className="pt-2 flex items-center gap-4 pb-3"><IoChatbubbleEllipsesOutline className="scale-200"/> to chat with everybody.</li>
      </ul>
    </div>
  );
}