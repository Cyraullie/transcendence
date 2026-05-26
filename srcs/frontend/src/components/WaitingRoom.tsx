export default function WaitingRoom() {
    return (
      <div>  
        <h1>Waiting Room</h1>
        <div className="grid grid-cols-2 w-xl gap-6">
          <div className="bordered">
            <ul className="list">
              <li className="text-xl">List of players</li>
              <li className="list-row text-lg">
                <div>Charlotte aux fraises</div>
              </li>
              <li className="list-row text-lg">
                <div>Anthony</div>
              </li>
              <li className="list-row text-lg">
                <div>Tintin</div>
              </li>
              <li className="list-row text-lg">
                <div>Milou</div>
              </li>
              <li className="list-row text-lg">
                <div>Davy Jones</div>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary self-start">Start Game</button>
        </div>
      </div>
    );
}