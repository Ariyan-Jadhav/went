import "dotenv/config";
import mongoose from "mongoose";
import { BreathingBots } from "../models/bots.model.js";
import bots from "./breathingBotsDemo.json" with { type: "json" };
const MONGODB_URL = process.env.MONGODB_URL;
async function seedMongo() {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB!");
    const START = parseInt(process.argv[2] || "0");
    const END = parseInt(process.argv[3] || String(bots.length));
    const BATCH = bots.slice(START, END);
    console.log(`Seeding bots ${START + 1} to ${END} (${BATCH.length} bots)...`);
    const operations = BATCH.map((bot) => ({
        updateOne: {
            filter: { id: bot.id },
            update: { $set: bot },
            upsert: true,
        },
    }));
    const result = await BreathingBots.bulkWrite(operations, {
        ordered: false,
    });
    console.log(`
  MongoDB seeding complete!
  Attempted:  ${BATCH.length}
  Inserted:   ${result.upsertedCount}
  Updated:    ${result.modifiedCount}
  `);
}
seedMongo()
    .catch((e) => {
    console.error("MongoDB seeding failed:", e);
    process.exit(1);
})
    .finally(async () => {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB!");
});
//# sourceMappingURL=transferingData.js.map