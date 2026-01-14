import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import { clerkMiddleware } from "@clerk/express";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 6969;
// security middleware //
app.use(helmet());
// logging middleware //
if (process.env.NODE_ENV === "development")
    app.use(morgan("dev"));
// Raw body for webhook routes
app.use("/api", express.raw({ type: "application/json" }));
// Body Parser Middleware //
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
app.use("/api/", userRouter);
//CORS configuration
app.use(cors({
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
}));
app.use(clerkMiddleware());
// global rate limiter //
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: process.env.NODE_ENV === "development" ? 100 : 1000,
    message: "Too many request from IP, please try again later",
});
app.use("/api", limiter);
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
}));
// start server //
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
//# sourceMappingURL=index.js.map