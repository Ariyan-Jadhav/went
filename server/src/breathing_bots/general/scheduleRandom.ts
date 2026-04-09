import { BreathingBots } from "../../models/bots.model.js";
import { Think } from "../../models/think.model.js";
import "dotenv/config";
import cron from "node-cron";
import getBots from "./randomList.js";
import { Groq } from "groq-sdk";
import { AppError } from "../../middleware/error.middleware.js";
import { engagePost2 } from "../comments/autoComments_2.js";

const THOUSAND_YEARS = process.env.THOUSAND_YEARS!;

let randomBots: string[] = [];

export async function reloadBots() {
  randomBots = await getBots.random();
  console.log("Bots reloaded at", new Date().toISOString());
}

async function uploadThink(
  data: InstanceType<typeof BreathingBots>,
  user: string,
) {
  const prompt = `You are a real person posting on Twitter/X or Reddit.

Identity:
- Username: ${data.username}
- Archetype: ${data.archetype}
- Bio: ${data.bio}
- Location: ${data.location}

Current State:
- Mood: ${data.mood_state.current}
- Time: ${new Date().toISOString()}

Personality:
- ${data.personality.traits.join(", ")}
- Interests: ${data.personality.interests.join(", ")}

Voice:
- Tone: ${data.voice.tone}
- Style: ${data.voice.sentence_length}
- Quirks: ${data.voice.quirks.join(", ")}
- Emojis: ${data.voice.emoji_usage.emojis.join(" ")}

Memory:
${data.memory.long_term.join("\n- ")}

Recent posts (DO NOT repeat or rephrase these):
${data.recent_outputs.join("\n- ")}

Rules:
- Can be short OR longer
- Sound like a real human typing casually
- Be specific to a situation (not generic)
- Slightly opinionated or observational
- Casually use gen-z slangs

Strictly avoid:
- generic lines (like "life is hard")
- formal or AI-like writing
- use of word "vibe", "vibes", "lowkey"
- repeating recent posts
- these words: ${data.voice.forbidden_words.join(", ")}

Output only the post. No explanation.`;

  const groq = new Groq({ apiKey: THOUSAND_YEARS });

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a real human. Write casually, imperfectly, never like AI.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "openai/gpt-oss-120b",
    temperature: 0.9,
    max_completion_tokens: 500,
    top_p: 0.95,
    stream: true,
    reasoning_effort: "medium",
    stop: null,
  });

  let output = "";
  for await (const chunk of chatCompletion) {
    const delta = chunk.choices[0]?.delta as any;
    output += delta?.content || delta?.reasoning_content || "";
  }

  output = output.trim();

  await BreathingBots.updateOne(
    { id: user },
    { $push: { recent_outputs: output } },
  );

  const response = await Think.create({
    user_id: user,
    content: output,
    imageUrl: [],
    hashtags: [],
    likesCount: 0,
    commentsCount: 0,
    rethinkCount: 0,
  });

  if (!response) throw new AppError("could not post", 500);
  engagePost2(response._id.toString(), output, user);
}

async function processBot() {
  if (randomBots.length === 0) {
    console.log("Random bot list empty, reloading...");
    randomBots = await getBots.random();
  }

  const user = randomBots.shift();
  if (!user) return;

  const data = await BreathingBots.findOne({ id: user });
  if (!data) throw new AppError("could not find the bot", 401);

  await uploadThink(data, user);
}

async function assembleBB() {
  if (Math.random() < 0.2) return;

  const hr = new Date().getHours();
  if (hr >= 0 && hr < 24) {
    try {
      await processBot();
    } catch (err) {
      console.error("assembleBB random error:", err);
    }
  }
}

cron.schedule("0 5 * * *", reloadBots);

cron.schedule("*/10 * * * *", assembleBB);
