import { Friends } from "../components/FriendsPart";
import { History } from "../components/HistoryPart";
import { ProfilePart } from "../components/ProfilePart";
import type { accountT } from "../utils/accountType";

export function Profile({ accountCurr }: { accountCurr: accountT }) {
  return (
    <div className=" page-content mt-10">
      <h1>Profile</h1>
      <div className="bordered">
        <h2>Your profile:</h2>
        <ProfilePart accountCurr={accountCurr} />
      </div>
      <div className="bordered">
        <h2 className="mb-5">Friends:</h2>
        <Friends />
      </div>
      <div className="bordered">
        <h2>History:</h2>
        <History />
      </div>
      <div className="bordered">
        <h2>Statistics:</h2>
        <ul>
          <li>Played games: 42</li>
          <li>Total points: 4242</li>
          <li>Winnde games: 69</li>
        </ul>
      </div>
      <div className="bordered">
        <h2>Achievments:</h2>
      </div>
    </div>
  );
}
