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

dotenv.config();
await connectDB();
const app = express();

app.set("trust proxy", 1);
const PORT = process.env.PORT || 6969;

import userRouter from "./routes/user.route.js";
app.use("/api", express.raw({ type: "application/json" }), userRouter);

// websocket server //

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // Your client URL
    credentials: true, // 🔥 THIS WAS MISSING! Very important for cookies/auth
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

// security middleware //
app.use(helmet());

// logging middleware //
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

//CORS configuration - FIXED: Must allow credentials and use correct origin
app.use(
  cors({
    origin: "http://localhost:5173", // 🔥 FIXED: Was process.env.CLIENT_URL which might be wrong
    credentials: true, // 🔥 THIS IS CRITICAL!
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

// Webhook route needs raw body BEFORE json parser

// Body Parser Middleware - MUST COME BEFORE ROUTES //
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(clerkMiddleware());

// Import routes
import profileRouter from "./routes/profile.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import thinkRouter from "./routes/think.route.js";
import notificationRouter from "./routes/notification.routes.js";
import followRouter from "./routes/follow.route.js";

// global rate limiter //

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.NODE_ENV === "development" ? 100 : 1000,
  message: "Too many request from IP, please try again later",
});

app.use("/api", limiter);

// Regular routes - these will use the JSON body parser above

app.use("/profile", profileRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/think", thinkRouter);
app.use("/notification", notificationRouter);
app.use("/follow", followRouter);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "server is running",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler //
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

//  Global error handler //
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

// start server //
// 🚨 CRITICAL FIX: Listen on httpServer, not app!
httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT} in ${process.env.NODE_ENV} mode`,
  );
  console.log(`🔌 Socket.IO is ready for connections`);
  console.log(`🌐 Accepting requests from http://localhost:5173`);
});
