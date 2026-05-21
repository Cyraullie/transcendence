import { FaPlus } from "react-icons/fa";

export default function AddFriendsBtn({req_id, changeHandler}: {req_id: number, changeHandler:(req_id: number, func: string) => void}) {
	return (
    <div>
      <button
        className="btn"
        onClick={() => changeHandler(req_id, "accept")}
      >
        {" "}
        <FaPlus />{" "}
        </button>

    </div>
  );

}