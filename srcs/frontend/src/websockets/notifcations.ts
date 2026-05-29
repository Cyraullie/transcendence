import useWebSocketModule from "react-use-websocket";

import host from '../api/host';
import { useNotif } from "../components/hooks/useNotif";
import type { SetStateAction } from "react";

export function Notifications({loggedIn, setProfile, updatedProfile}:{loggedIn: boolean, setProfile:React.Dispatch<SetStateAction<boolean>>, updatedProfile:boolean}) {

	const { default: useWebSocket = useWebSocketModule } = useWebSocketModule as unknown as {
		default: typeof useWebSocketModule;
	};

	const notif = useNotif();
	
	useWebSocket(loggedIn ? (host.ws + "notification/") : null, {
		shouldReconnect: () => loggedIn,
		reconnectAttempts: 30,
		reconnectInterval: 1000,
		
		heartbeat: {
			message: JSON.stringify({ type: "heartbeat" }),
			returnMessage: JSON.stringify({ type: "acknowledge" }),
			interval: 30000,
			timeout: 60000,
		},

		onOpen: () => {
		},

		onClose: () => {
		},

		onMessage: (event) => {
			const data = JSON.parse(event.data);
			if (data.type == "acknowledge") {
				return
			}
			const payload = data.payload;
			if (data.event === "notification") {
				if (data.type === "friend_request") {
					notif?.showNotif("New Friend Request", payload.from_user + " has sent you a friend request!", 5000);
				} else if (data.type === "friend_accepted") {
					notif?.showNotif("Friend Request Accepted", payload.from_user + " has accepted your friend request!", 5000);
				} else {
					console.debug("type not implemented. Format: ", data)
				}
			} else if (data.event === "update") {
				if (data.type === "friend_delete") {
					setProfile(!updatedProfile);
				} else if (data.type === "friend_block") {
					setProfile(!updatedProfile);
				} else if (data.type === "friend_online") {
					setProfile(!updatedProfile);
				} else if (data.type === "game_finished") {
					console.log("update leaderboard")
				}
			} else {
				console.debug("event not implemented. Format: ", data)
			}	
		},
	});
	return null;
}

// Friend Deleted
// {"type": "friend_delete", "event": "update", "payload": null}


// Friend request denied
// {"type": "friend_delete", "event": "update", "payload": null}

// Blocked
// {"type": "friend_blocked", "event": "update", "payload": null}

// // Friend goes online/offline
// event: "update"
// 
// payload: null
// 
// type: "friend_online"


// Leaderboard
// game_finished