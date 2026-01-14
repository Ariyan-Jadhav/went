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
const PORT = process.env.PORT || 6969;

// websocket server //
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "http://localhost:5173" },
});

const userSockets = new Map();

io.on("connection", (socket) => {
  const userId = socket.handshake.auth.userId;
  userSockets.set(userId, socket.id);

  socket.on("disconnect", () => {
    userSockets.delete(userId);
  });
});

export { io, userSockets };

// security middleware //
app.use(helmet());

// logging middleware //
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Raw body for webhook routes
app.use("/api", express.raw({ type: "application/json" }));

// Body Parser Middleware //
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(clerkMiddleware());

import userRouter from "./routes/user.route.js";
import profileRouter from "./routes/profile.route.js";
import postRouter from "./routes/post.route.js";

app.use("/api/", express.raw({ type: "application/json" }), userRouter);

//CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL,
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
  })
);

// global rate limiter //
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.NODE_ENV === "development" ? 100 : 1000,
  message: "Too many request from IP, please try again later",
});

app.use("/api", limiter);

//routes
app.use("/profile", profileRouter);
app.use("/post", postRouter);
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
app.listen(PORT, () => {
  console.log(
    ` Server running on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
