import mongoose from "mongoose";
import { BreathingBots } from "../models/bots.model.js";
import "dotenv/config";

const MONGODB_URL = process.env.MONGODB_URL!;

async function getBots() {
  await mongoose.connect(MONGODB_URL);

  const bots = await BreathingBots.find({}, { username: 1, id: 1, _id: 0 });

  const usernames = bots.map((b) => b.username);

  await mongoose.disconnect();
}

getBots().catch((e) => {
  console.error("Cannot fetch:", e);
  process.exit(1);
});
