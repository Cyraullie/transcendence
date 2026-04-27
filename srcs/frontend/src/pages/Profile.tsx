export function Profile() {
  return (
    <div className=" page-content mt-10">
      <h1>Profile</h1>
      <img src="./src/assets/profile-icon.png" className="m-auto mt-10" />
      <div className="bordered">
        <h2>Statistic:</h2>
        <ul>
          <li>Played games: 42</li>
          <li>Total points: 4242</li>
          <li>Winnde games: 69</li>
        </ul>
      </div>
      <div className="bordered">
        <h2>Friends:</h2>
      </div>
      <div className="bordered">
        <h2>Achievments:</h2>
      </div>
    </div>
  );
}
