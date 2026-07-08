import { useRef, useState } from "react";

export default function BeginModal() {
  const beginModal = useRef<HTMLDialogElement>(null);
  const displayBeginModal = useState<boolean>(true);

  return (
    <div>
      <dialog
        id="endingGame"
        className="modal text-center"
        ref={beginModal}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      >
        <div className="modal-box bg-(--bg-color)">
          <h2>Ready for your first game?</h2>
          <p>Some important information before starting playing:</p>
          <ul className="list-disc">
            <li>
              You have <strong>15 seconds</strong> for playing, if you don't
              play in this time a bot play for you
            </li>
            <li>
              If a bot play <strong>3 time de suite for you</strong>, you are
              kicked of the game
            </li>
            <li>
              You can find more information in the little i or on the rules page
            </li>
          </ul>
          <div className="modal-action">
            <form method="dialog" className="flex justify-between w-full">
              <button className="btn del">Continue</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
