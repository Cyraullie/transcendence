import { Friends } from "../components/FriendsPart";
import { History } from "../components/HistoryPart";
import { ProfilePart } from "../components/ProfilePart";
import type { accountT } from "../utils/accountType";

export function Profile({ accountCurr }: { accountCurr: accountT }) {
  return (
    <div className=" page-content mt-10">
      <h1>Profile</h1>
      <div className="bordered collapse">
        <input type="radio" name="profile-radio" />
        <div className="collapse-title">
          <h2>Your profile:</h2>
        </div>
        <div className="collapse-content">
          <ProfilePart accountCurr={accountCurr} />
        </div>
      </div>
      <div className="bordered collapse">
        <input type="radio" name="profile-radio" />
        <div className="collapse-title">
          <h2 className="mb-5">Friends:</h2>
        </div>
        <div className="collapse-content">
          <Friends />
        </div>
      </div>
      <div className="bordered collapse">
        <input type="radio" name="profile-radio" />
        <div className="collapse-title">
          <h2>History:</h2>
        </div>
        <div className="collapse-content">
          <History />
        </div>
      </div>
      <div className="bordered collapse">
        <input type="radio" name="profile-radio" />
        <div className="collapse-title">
          <h2>Statistics:</h2>
        </div>
        <div className="collapse-content">
          <ul>
            <li>Played games: 42</li>
            <li>Ratio: W: 30 L: 12</li>
            <li>Total points: 4242</li>
            <li>Nombre fois atout choisis</li>
            <li>Atout preferée</li>
            <li>Nombre de pli prise</li>
            <li>Nombre de derniere pli prise</li>
            <li>Nombre de annonce en main</li>
            <li>Nombre de annonce sur table</li>
            <li>Record annonce en main</li>
            <li>Record sur table</li>
          </ul>
        </div>
      </div>
      <div className="bordered collapse">
        <input type="radio" name="profile-radio" />
        <div className="collapse-title">
          <h2>Achievements:</h2>
        </div>
        <div className="collapse-content">
          <p>
            Pas encore fait, faut pas pousser mémé dans les orties nan mais ho
          </p>
        </div>
      </div>
    </div>
  );
}
