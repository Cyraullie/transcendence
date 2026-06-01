import CreateOrJoin from "../components/Game/CreateOrJoin";
import WaitingRoom from "../components/waitingRoom/WaitingRoom";

export function Game({logged_in} : {logged_in : boolean}) {
	const isInWaitingRoom = false;
  return (
	  !isInWaitingRoom ? <CreateOrJoin /> : <WaitingRoom logged_in={logged_in}/>
  );
}
