import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";

export default function FilterGame() {
	const [search, setSearch] = useState<string>("");
	const [dispFilter, setDispFilter] = useState<boolean>(false)
  return (
    <div className="filterGame flex justify-between my-5">
      <label className="input w-1/3">
        <IoSearch className="text-2xl" />
        <input
          type="search"
          required
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <form className="flex gap-3 justify-end">
        <input
          className={dispFilter ? "btn checked:bg-(--nav-color)" : "hidden"}
          type="checkbox"
          name="filter"
          aria-label="friends"
        />
        <input
          className={dispFilter ? "btn checked:bg-(--nav-color)" : "hidden"}
          type="checkbox"
          name="filter"
          aria-label="public"
        />
		<label className="btn btn-circle swap swap-rotate">
		{/* this hidden checkbox controls the state */}
		<input type="checkbox" onClick={() => setDispFilter(!dispFilter)}/>

		<FaFilter className="swap-off fill-current mx-auto"/>
		<MdClose className="swap-on fill-current text-xl"/>
		</label>
      </form>
    </div>
  );
}
