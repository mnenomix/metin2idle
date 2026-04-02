import { Server as HttpServer } from "http";
import { Server } from "socket.io";
import type {
  ServerToClientEvents,
  ClientToServerEvents,
} from "@idle/shared";
import { env } from "../config/env.js";

export function createSocketServer(httpServer: HttpServer) {
  const io = new Server<ClientToServerEvents, ServerToClientEvents>(
    httpServer,
    {
      cors: {
        origin: env.FRONTEND_URL,
        credentials: true,
      },
      path: "/socket.io",
    }
  );

  const game = io.of("/game");

  game.on("connection", (socket) => {
    console.log(`[Socket] Client connected: ${socket.id}`);

    socket.emit("connected", { message: "Connected to game server" });

    socket.on("heartbeat", () => {
      // Update last-seen timestamp (Redis in later phases)
    });

    socket.on("disconnect", () => {
      console.log(`[Socket] Client disconnected: ${socket.id}`);
    });
  });

  return io;
}
