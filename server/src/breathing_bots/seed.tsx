import prisma from "../../lib/prisma.js";
import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { Response, Request } from "express";

import bots from "./breathingBots.json" with { type: "json" };
async function seedBots() {
  console.log(`🚀 Seeding ${bots.length} bots...`);

  const formatted = bots.map((bot) => ({
    id: bot.id,
    username: bot.username,
    bio: bot.bio,
  }));

  // ONE single query for all 400 bots 🔥
  const result = await prisma.user.createMany({
    data: formatted,
    skipDuplicates: true, // won't crash if you run it twice
  });

  console.log(`✅ Successfully seeded ${result.count} bots!`);
}

seedBots()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
