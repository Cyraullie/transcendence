export function Navbar() {
  return (
    <div className="navbar bg-(--nav-color)">
      <div className="flex-1">
        <a className="text-xl item-menu" href="/">
          PopCards
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <li>
            <a className="item-menu" href="/game">
              Game
            </a>
          </li>
          <li>
            <a className="item-menu" href="/leaderboard">Leaderboard</a>
          </li>
          <li>
            <a className="item-menu" href="/profile">Profile</a>
          </li>
          <li>
            <a className="item-menu" href="/settings">Settings</a>
          </li>
          <li>
            <a className="item-menu" href="/rules">Rules</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
