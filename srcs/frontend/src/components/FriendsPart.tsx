import { TbPointFilled } from "react-icons/tb";
import type { friendT } from "../utils/friendType";
import { generateFakeFriends } from "../utils/generateArrayTestFriends";

export function Friends() {
  const friends = generateFakeFriends();
  return (
	  <div className="friend-part">
	  <div className="btn-container mb-5">
	  <button className="btn">Search
	  </button>
	  <button className="btn">Add</button>
	  <button className="btn">Notif</button>
	  </div>
    <table>
      <tr>
        <th className="w-10 text-left"></th>
        <th className="w-50 text-left">Name</th>
        <th className="w-30 text-left">Status</th>
        <th className="w-30 text-left">From</th>
      </tr>
      {friends.map((friend: friendT) => (
        <tr>
          <td className={(friend.online ? "text-green-400" : "") + " text-2xl text-center"}>
            <TbPointFilled />
          </td>
          <td>{friend.username}</td>
          <td>{friend.status}</td>
          <td>{friend.date}</td>
        </tr>
      ))}
    </table>
	</div>
  );
}
