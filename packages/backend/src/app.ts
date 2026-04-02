import express from "express";
import cors from "cors";
import helmet from "helmet";
import { authHandler } from "./auth/index.js";
import apiRouter from "./routes/index.js";
import { errorHandler } from "./middleware/error.js";
import { env } from "./config/env.js";

const app = express();

app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(helmet());
app.use(express.json());

// Auth.js
app.use("/api/auth/*", authHandler);

// API routes
app.use("/api", apiRouter);

// Error handler
app.use(errorHandler);

export default app;
