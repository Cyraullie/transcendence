import React, { useState } from "react";
import { changeUsername } from "../api/profile";
import type { errorT } from "../utils/errorType";

export function PseudoChange({dialogRef, updatedProfile, setUpdate}:{dialogRef: React.RefObject<HTMLDialogElement| null>; updatedProfile:boolean; setUpdate:React.Dispatch<React.SetStateAction<boolean>>}) {

	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value);};
	const passChange = (e: React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value);};
	const [reason, setReason] = useState<errorT>({code:200,response:""})

  async function updateUser(in_name:string, old_pass:string) {
	const res = await changeUsername(in_name, old_pass);
	if (res.code !== 200) {
		setReason(res);
		return ;
	}
	setUpdate(!updatedProfile);
	setName("");
	setPassword("");
	dialogRef.current?.close();
	return ;
  }

  return (
    <div className="modal-box bg-(--bg-color)">
      <h3 className="text-lg font-bold text-center">Change username</h3>
      <p className="py-4 text-center">
        Enter your password and choose your new username
      </p>
	    {reason.code === -1 || reason.code === 400 ? <p className="py-4 text-center">{String(reason.response)}</p> : ""}
		{reason.code !== 200 && reason.code !== -1 && reason.code !== 400? "Unknown Error: " + String(reason.response) : ""}
      <div className="modal-action">
        <fieldset className="fieldset bg-(--bg-color) border-(--accent-color) rounded-box w-xs border-1 p-4 mx-auto">
          <legend className="fieldset-legend">Change username</legend>

          <label className="label">Password</label>
          <input type="password" value={password} onChange={passChange} className="input" placeholder="Your password" />

          <label className="label">New username</label>
          <input
            type="text"
			value={name}
			onChange={nameChange}
            className="input"
            placeholder="Your new username"
          />
          <form className="flex justify-around">
            <button type="button" onClick={() => updateUser(name, password)} className="btn bg-(--nav-color) mt-4">Change</button>
            <button type="button" onClick={() => dialogRef.current?.close()} className="btn bg-(--nav-color) mt-4">Cancel</button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}
