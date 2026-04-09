import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { ErrorRequestHandler } from "express";
import { clerkMiddleware } from "@clerk/express";
import connectDB from "./database/db.mongo.js";
import { Server } from "socket.io";
import { createServer } from "http";

// ─── 1. ENV & DB ────────────────────────────────────────────────────────────
dotenv.config({ override: true });
await connectDB();

import { reloadBots } from "./breathing_bots/general/schedule.js";
await reloadBots();

// ─── 2. APP & HTTP SERVER (needed for Socket.IO) ────────────────────────────
const app = express();
const httpServer = createServer(app);
app.set("trust proxy", 1);
const PORT = process.env.PORT || 6969;

// ─── 3. SOCKET.IO ───────────────────────────────────────────────────────────
const io = new Server(httpServer, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://wentapp.me",
      "https://went-sm.vercel.app",
      ...(process.env.CLIENT_URL ? [process.env.CLIENT_URL] : []),
    ],
    credentials: true,
    methods: ["GET", "POST"],
  },
});

const userSockets = new Map();

io.on("connection", (socket) => {
  console.log(`🔌 Socket connected: ${socket.id}`);

  const userId = socket.handshake.auth.userId;

  if (userId) {
    userSockets.set(userId, socket.id);
    console.log(`✅ User ${userId} authenticated with socket ${socket.id}`);
  }

  socket.on("disconnect", () => {
    if (userId) {
      userSockets.delete(userId);
      console.log(`👋 User ${userId} disconnected`);
    }
  });
});

export { io, userSockets };

// ─── 4. SECURITY & LOGGING MIDDLEWARE ───────────────────────────────────────
app.use(helmet());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// ─── 5. CORS ─────────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://wentapp.me",
      "https://went-sm.vercel.app",
      ...(process.env.CLIENT_URL ? [process.env.CLIENT_URL] : []),
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "device-remember-token",
      "Access-Control-Allow-Origin",
      "Origin",
      "Accept",
    ],
  }),
);
// ─── 6. WEBHOOK ROUTE (raw body — MUST be before express.json()) ─────────────
import userRouter from "./routes/user.route.js";
app.use("/api", express.raw({ type: "application/json" }), userRouter);

// ─── 7. BODY PARSERS (after webhook route) ───────────────────────────────────
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// ─── 8. CLERK MIDDLEWARE ─────────────────────────────────────────────────────
app.use(clerkMiddleware());

// ─── 9. RATE LIMITER ─────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.NODE_ENV === "development" ? 100 : 1000,
  message: "Too many requests from this IP, please try again later",
});
app.use("/api", limiter);

// ─── 10. ROUTES ──────────────────────────────────────────────────────────────
import profileRouter from "./routes/profile.route.js";
import commentRouter from "./routes/comment.route.js";
import thinkRouter from "./routes/think.route.js";
import notificationRouter from "./routes/notification.routes.js";
import followRouter from "./routes/follow.route.js";
import exploreRoute from "./routes/feed.route.js";
import likeRouter from "./routes/like.route.js";
import searchRouter from "./routes/search.route.js";

app.use("/api", userRouter);
app.use("/feed", exploreRoute);
app.use("/profile", profileRouter);
app.use("/comment", commentRouter);
app.use("/think", thinkRouter);
app.use("/notification", notificationRouter);
app.use("/follow", followRouter);
app.use("/like", likeRouter);
app.use("/api/users", searchRouter);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "server is running",
    timestamp: new Date().toISOString(),
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "FUCK THIS SHIT",
    timestamp: new Date().toISOString(),
  });
});

// ─── 11. 404 HANDLER ─────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

// ─── 12. GLOBAL ERROR HANDLER ────────────────────────────────────────────────
app.use(((err, req, res, next) => {
  console.log(err);
  return res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal server error",
    ...(process.env.NODE_ENV === "development" && {
      stack: err.stack,
    }),
  });
}) as ErrorRequestHandler);

// ─── 13. START SERVER ────────────────────────────────────────────────────────
httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT} in ${process.env.NODE_ENV} mode`,
  );
  console.log(`🔌 Socket.IO is ready for connections`);
  console.log(`🌐 Accepting requests from http://localhost:5173`);
});

// ─── 14. START SERVER ────────────────────────────────────────────────────────
import "./breathing_bots/general/schedule.js";
import "./breathing_bots/general/scheduleRandom.js";
import "./breathing_bots/news/news.js";
import "./breathing_bots/news/news2.0.js";
import "./breathing_bots/deleteSchedule.js";
