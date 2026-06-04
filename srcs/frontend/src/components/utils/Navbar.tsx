import { useLocation } from "react-router";
import { MdLogout, MdLogin, MdOutlineLeaderboard } from "react-icons/md";
import { TbCards } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { GoLaw } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/http/login";
import { useAuth } from "../hooks/useAuth";

export function Navbar() {
  const navigate = useNavigate();
  const current_location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(logged_in);
  const isActive = (path: string) => path === current_location.pathname;
  const auth = useAuth();
  
  async function handleLogout() {
		if (!auth.logged_in) {
			navigate("/login", {state: current_location.pathname})
			return ;
		}
		
		auth.setLogging(true);
		const res = await logout();
		if (res.code !== 200 && res.code !== 401) {
			auth.setLogging(false);
			return ;
		}
		auth.setLoggedIn(false);
		navigate("/login", {state: current_location.pathname});
		setTimeout(() => {
			auth.setLogging(false);
		}, 500);
	}
	if (location.pathname === "/login") {
		navigate("/login")
	} else {
		navigate("/login", {state: location.pathname});
	}
  }

  return (
    <div className="navbar bg-(--nav-color) fixed top-0 z-100 ">
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
              <TbCards /> Game
            </a>
          </li>
          <li>
            <a
              className={
                (isActive("/leaderboard") ? "active " : "") + "item-menu"
              }
              href="/leaderboard"
            >
              <MdOutlineLeaderboard /> Leaderboard
            </a>
          </li>
          <li>
            <a
              className={(isActive("/profile") ? "active " : "") + "item-menu"}
              href="/profile"
            >
              <CgProfile /> Profile
            </a>
          </li>
          <li>
            <a
              className={(isActive("/settings") ? "active " : "") + "item-menu"}
              href="/settings"
            >
              <CiSettings /> Settings
            </a>
          </li>
          <li>
            <a
              className={(isActive("/rules") ? "active " : "") + "item-menu"}
              href="/rules"
            >
              <GoLaw /> Rules
            </a>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className={(isActive("/login") ? "active " : "") + "item-menu"}
            >
              {auth.logged_in ? (
                <MdLogout fontSize={20} />
              ) : (
                <MdLogin fontSize={20} />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
