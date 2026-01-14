import mongoose from "mongoose";
import { AppError } from "../middleware/error.middleware.js";

const MAX_RETRIES: number = 3;
const RETRY_INTERVAL: number = 5000;

class DatabaseConnection {
  retryCount: number;
  isConnected: boolean;

  constructor() {
    this.retryCount = 0;
    this.isConnected = false;

    mongoose.set("strictQuery", true);

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully");
      this.isConnected = true; // ✅ Fixed!
    });

    mongoose.connection.on("error", (err) => {
      console.log("❌ MongoDB connection error", err);
      this.isConnected = false;
    });

    mongoose.connection.on("disconnected", () => {
      console.log("⚠️ MongoDB disconnected");
      this.isConnected = false;
      this.handleDisconnection();
    });

    process.on("SIGINT", this.handleAppTermination.bind(this));
    process.on("SIGTERM", this.handleAppTermination.bind(this));
  }

  async connect() {
    try {
      if (!process.env.MONGODB_URL)
        throw new AppError("MONGODB_URL not found in .env", 400);

      const connectionOptions = {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      };

      if (process.env.NODE_ENV === "development") mongoose.set("debug", true);

      await mongoose.connect(process.env.MONGODB_URL, connectionOptions);
      this.retryCount = 0;
    } catch (err: any) {
      console.error("❌ Failed to connect to MongoDB:", err.message);
      await this.handleConnectionError();
    }
  }

  async handleConnectionError() {
    if (this.retryCount < MAX_RETRIES) {
      this.retryCount++;
      console.log(
        `🔄 Retrying connection... attempt ${this.retryCount} of ${MAX_RETRIES}`
      );
      await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL));
      return this.connect();
    } else {
      console.error(
        `❌ Failed to connect to MongoDB after ${MAX_RETRIES} attempts`
      );
      process.exit(1);
    }
  }

  handleDisconnection() {
    if (!this.isConnected) {
      console.log("🔄 Attempting to reconnect to MongoDB...");
      this.connect();
    }
  }

  async handleAppTermination() {
    try {
      await mongoose.connection.close();
      console.log("👋 MongoDB connection closed");
      process.exit(0);
    } catch (err) {
      console.error("❌ Error during disconnection:", err);
      process.exit(1);
    }
  }

  getConnectionStatus() {
    return {
      isConnected: this.isConnected,
      readyState: mongoose.connection.readyState,
      host: mongoose.connection.host,
      name: mongoose.connection.name,
    };
  }
}

const dbConnection = new DatabaseConnection();

export default dbConnection.connect.bind(dbConnection);
export const getDBStatus = dbConnection.getConnectionStatus.bind(dbConnection);
