import { createServer } from "http";
import app from "./app.js";
import { createSocketServer } from "./socket/index.js";
import { env } from "./config/env.js";

const server = createServer(app);
createSocketServer(server);

server.listen(env.PORT, () => {
  console.log(`[Server] Running on http://localhost:${env.PORT}`);
  console.log(`[Server] Environment: ${env.NODE_ENV}`);
});
