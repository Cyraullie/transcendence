
import { useRef } from "react";
import MiniProfile from "./MiniProfile";

type Props = {
  id: number;
  name: string;
  // showMiniProfileRef: Ref<HTMLDialogElement>;
  updatedFriends: boolean;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UsernameMiniProfileBtn({id, name, updatedFriends, setUpdate}: Props) {
  const showMiniProfileRef = useRef<HTMLDialogElement>(null);

	return (
    <>
    <button
      className="link-hover"
      onClick={() => showMiniProfileRef.current?.showModal()}
    >
    {name}
    </button>
    <dialog
      id="showMiniProfile"
      className="modal"
      ref={showMiniProfileRef}
    >
      <MiniProfile id={id} updatedFriends={updatedFriends} setUpdate={setUpdate}/>
    </dialog>
      </>
	);
}