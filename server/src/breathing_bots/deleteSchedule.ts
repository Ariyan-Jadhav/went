import cron from "node-cron";
import { Think } from "../models/think.model.js";

async function deleteOldThinks() {
  try {
    console.log("Deleting oldest thinks...");

    const oldThinks = await Think.find({})
      .sort({ createdAt: 1 })
      .limit(2000)
      .select("_id");

    if (oldThinks.length === 0) return;

    const ids = oldThinks.map((t) => t._id);

    await Think.deleteMany({ _id: { $in: ids } });

    console.log(`Deleted ${ids.length} thinks`);
  } catch (err) {
    console.error("Error deleting thinks:", err);
  }
}

cron.schedule("0 5 */20 * *", deleteOldThinks);
