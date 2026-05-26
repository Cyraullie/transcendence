import React, { useEffect, useState } from "react";
import { notifContext } from "./CreateNotifContext";
import type { notifT } from "../../utils/notifType";

export interface NotifContextType {
  title: string;
  body: string;
  isEnabled: boolean;
  duration: number;
  showNotif: (title: string, body: string, duration?: number) => void;
  resetNotif: () => void;
}

export default function NotifProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [duration, setDuration] = useState(10000);
  const [queue, setQueue] = useState<notifT[]>([])

  function showNotif(title: string, body: string, duration?: number) {

	const new_notif = {title:title, message:body, duration:duration};
	setQueue(queue => [...queue, new_notif])
    // setIsEnabled(true);
    // setTitle(title);
    // setBody(body);
    // if (duration) setDuration(duration);
  }

  useEffect(() => {
	function handle_queue() {
		if (isEnabled || queue.length === 0) {
			return ;
		}
		setTitle(queue[0].title);
		setBody(queue[0].message);
		if (queue[0].duration) setDuration(queue[0].duration);
		setIsEnabled(true);

		setQueue(prev => prev.slice(1));
	}
	handle_queue();
  }, [queue, isEnabled])

  function resetNotif() {
    setIsEnabled(false);
  }

  return (
    <notifContext.Provider
      value={{ title, body, isEnabled, duration, showNotif, resetNotif }}
    >
      {children}
    </notifContext.Provider>
  );
}
