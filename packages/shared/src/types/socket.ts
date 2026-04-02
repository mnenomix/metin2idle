export interface ServerToClientEvents {
  connected: (data: { message: string }) => void;
  notification: (data: { message: string }) => void;
}

export interface ClientToServerEvents {
  heartbeat: () => void;
}
