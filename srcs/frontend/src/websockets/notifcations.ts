import useWebSocketModule from "react-use-websocket";

import host from '../api/host';
import { useNotif } from "../components/hooks/useNotif";

export function Notifications() {

	const { default: useWebSocket = useWebSocketModule } = useWebSocketModule as unknown as {
		default: typeof useWebSocketModule;
	};

	const notif = useNotif();
	
	useWebSocket(host.ws + "notification/", {
		shouldReconnect: () => true,
		
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
			if (event.data.event === "notifcation") {
				if (event.data.payload.type === "friend_request") {
					notif?.showNotif("New Friend Request", event.data.payload.from_user + " has sent you a friend request!", 5000);
				}
			} else if (event.data.event === "update") {
				console.debug("Refresh target");
			} else {
				console.debug("event not implemented. Format: ", event.data)
			}
			notif?.showNotif("Server Notification", event.data, 5000);
	
		},
	});
	return null;
}