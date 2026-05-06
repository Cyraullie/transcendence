import { useState } from "react";
import { FaPen } from "react-icons/fa";

export function AvatarSelection({ currentAvatar }: { currentAvatar: string }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="rounded-4xl w-24 bg-(--hover-color) flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        setClicked(true);
        setHovered(false);
      }}
    >
      <img
        src={currentAvatar}
        className={hovered ? "avatar-hovered" : "" + "rounded-4xl"}
      />
      <FaPen className={hovered ? "pen-hovered" : "hidden"} />
      <div
        className={
          clicked
            ? "bg-(--hover-color) float-left absolute left-0 top-0 rounded-4xl"
            : "hidden" + ""
        }
        onMouseLeave={() => setClicked(false)}
      >
        <p className="text-center">Choice your new avatar</p>
        <ul className="flex flex-wrap w-180">
          <li className="li-avatars">
            <img src="src/assets/avatars/avatar1.png" className="rounded-4xl" />
          </li>
          <li className="li-avatars">
            <img src="src/assets/avatars/avatar2.jpg" className="rounded-4xl" />
          </li>
          <li className="li-avatars">
            <img src="src/assets/avatars/avatar3.jpg" className="rounded-4xl" />
          </li>
          <li className="li-avatars">
            <img
              src="src/assets/avatars/avatar4.webp"
              className="rounded-4xl"
            />
          </li>
          <li className="li-avatars">
            <img src="src/assets/avatars/avatar5.jpg" className="rounded-4xl" />
          </li>
          <li className="li-avatars">
            <img src="src/assets/avatars/avatar6.jpg" className="rounded-4xl" />
          </li>
          <li className="li-avatars">
            <img src="src/assets/avatars/avatar7.jpg" className="rounded-4xl" />
          </li>
          <li className="li-avatars">
            <img src="src/assets/avatars/avatar8.jpg" className="rounded-4xl" />
          </li>
          <li className="li-avatars">
            <img src="src/assets/avatars/avatar9.jpg" className="rounded-4xl" />
          </li>
        </ul>
      </div>
    </div>
  );
}
