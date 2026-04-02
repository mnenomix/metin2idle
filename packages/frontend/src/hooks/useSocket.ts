import { useState, useEffect } from "react";
import { connectSocket, disconnectSocket, getSocket } from "@/lib/socket";
import { useAuth } from "@/providers/AuthProvider";

export function useSocket() {
  const { user } = useAuth();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!user) {
      disconnectSocket();
      setConnected(false);
      return;
    }

    const socket = connectSocket();

    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [user]);

  return { socket: getSocket(), connected };
}
