import { hydrateRoot } from "react-dom/client";
import { NotifPopUp } from "../components/NotifPopUp";
import {
  setBodyNotif,
  setIsEnabled,
  setTitleNotif,
} from "./notifPopUpVariables";

export function callNotifPopUp(title: string, body: string) {
  setIsEnabled(true);
  setTitleNotif(title);
  setBodyNotif(body);
  console.log("called notif poppup with title: " + title + " body: " + body);
 
 hydrateRoot(document.getElementById('notifs')!, <NotifPopUp /> )
}
