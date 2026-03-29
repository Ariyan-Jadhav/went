import mongoose from "mongoose";
import { BreathingBots } from "../models/bots.model.js";
import "dotenv/config";

async function morning() {
  const bots = await BreathingBots.find(
    { activity_pattern: "morning" },
    { username: 1, id: 1 },
  );

  const list = bots.map((e) => e.id);

  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i]!, list[j]!] = [list[j]!, list[i]!];
  }

  return list;
}

async function evening() {
  const bots = await BreathingBots.find(
    { activity_pattern: "evening" },
    { username: 1, id: 1 },
  );

  const list = bots.map((e) => e.id);

  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i]!, list[j]!] = [list[j]!, list[i]!];
  }

  return list;
}

async function night() {
  const bots = await BreathingBots.find(
    { activity_pattern: "night_owl" },
    { username: 1, id: 1 },
  );

  const list = bots.map((e) => e.id);

  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i]!, list[j]!] = [list[j]!, list[i]!];
  }

  return list;
}

export default { morning, evening, night };
