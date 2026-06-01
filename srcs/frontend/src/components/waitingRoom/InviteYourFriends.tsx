import { useRef } from "react";
import generateFakePlayerList from "../../utils/test_funcs/generateFakePlayerList";

export default function InviteYourFriends() {
  const showFriendsList = useRef<HTMLDialogElement>(null);
  const fakePlayers = generateFakePlayerList();

  return (
    <>
      <button
        className="btn "
        onClick={() => showFriendsList.current?.showModal()}
      >
        Invite your friends
      </button>
      <dialog id="showFriendsList" className="modal" ref={showFriendsList}>
        <div className="modal-box bg-(--nav-color) w-1/4">
          <table className="table">
            <thead>
              <th>Invite your friends</th>
            </thead>
            <tbody>
              {fakePlayers.map((friend) => (
                <tr>
                  <td>
                    {friend.username}
                  </td>
                  <td>
                    <label className="swap btn">
                      <input type="checkbox" />
                      <button className="swap-off">
                        Invite
                      </button>
                      <button className="swap-on">
                        Done
                      </button>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      <form method="dialog" className="modal-backdrop">
        <button ></button>
      </form>
      </dialog>
    </>
  );
}