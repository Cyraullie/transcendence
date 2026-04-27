import { useLocation } from "react-router";

export function Navbar() {
  const current_location = useLocation();

  const isActive = (path: string) => path === current_location.pathname;

  return (
    <div className="navbar bg-(--nav-color)">
      <div className="flex-1">
        <a className="text-xl item-menu p-2" href="/">
          PopCards
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <li>
            <a
              className={(isActive("/game") ? "active " : "") + "item-menu"}
              href="/game"
            >
              Game
            </a>
          </li>
          <li>
            <a
              className={
                (isActive("/leaderboard") ? "active " : "") + "item-menu"
              }
              href="/leaderboard"
            >
              Leaderboard
            </a>
          </li>
          <li>
            <a
              className={(isActive("/profile") ? "active " : "") + "item-menu"}
              href="/profile"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              className={(isActive("/settings") ? "active " : "") + "item-menu"}
              href="/settings"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              className={(isActive("/rules") ? "active " : "") + "item-menu"}
              href="/rules"
            >
              Rules
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
