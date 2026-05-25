import { useState } from "react";
import { callNotifPopUp } from "../utils/callNotifPopUp";

export function TestNotifPopUp() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="">
      <div className="mx-auto flex flex-col items-center">
        <label className="label" id="title">
          Title
        </label>
        <input
          className="input"
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label id="body" className="label">
          Body
        </label>
        <input
          className="input"
          type="text"
          name="body"
          id="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button  className="btn mt-4" onClick={() => callNotifPopUp(title, body)}>Submit</button> 
      </div>
    </div>
  );
}
