export default function CreateOrJoin() {
  return (
    <div className="page-content mt-17">
      <h1 className="">Game</h1>
      <div className="container w-full">
        <div className="createOrJoinBtn-container w-1/3 text-center mt-10">
          <button className="btn m-3">Create</button>
		  <p>or</p>
		  <div className="joinCode-container m-3">
		  <input className="input w-2/3 m-3" type="text" placeholder="enter game code here"/>
		  <button className="btn">Join</button>
		  </div>
        </div>
        <div className="listAvailableGame w-2/3">
		<table className="table">
		<thead>
	<tr>
	<th>Room</th>
	<th>nb of player/max player</th>
	<th>pending</th>
	</tr>
		</thead>
		</table>
		</div>
      </div>
    </div>
  );
}
