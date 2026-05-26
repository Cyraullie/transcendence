import CreateOrJoin from "../components/CreateOrJoin";

export function Game() {
	const isInWaitingRoom = false;
  return (
	  !isInWaitingRoom ? <CreateOrJoin /> : <></>
  );
}
