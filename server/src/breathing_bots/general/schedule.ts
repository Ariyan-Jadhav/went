import { BreathingBots } from "../../models/bots.model.js";
import { Think } from "../../models/think.model.js";
import "dotenv/config";
import cron from "node-cron";
import getBots from "./randomList.js";
import { Groq } from "groq-sdk";
import { AppError } from "../../middleware/error.middleware.js";
import { engagePost1 } from "../comments/autoComments_1.js";

const GROQ_THINK = process.env.GROQ_THINK!;

let morningBots: string[] = [];
let eveningBots: string[] = [];
let nightBots: string[] = [];

export async function reloadBots() {
  morningBots = await getBots.morning();
  eveningBots = await getBots.evening();
  nightBots = await getBots.night();
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

  const groq = new Groq({ apiKey: GROQ_THINK });

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
  engagePost1(response._id.toString(), output, user);
}

async function processBot(
  bots: string[],
  reload: () => Promise<string[]>,
  setter: (list: string[]) => void,
) {
  if (bots.length === 0) {
    console.log("Bot list empty, reloading...");
    setter(await reload());
  }

  const user = bots.shift();
  if (!user) return;

  const data = await BreathingBots.findOne({ id: user });
  if (!data) throw new AppError("could not find the bot", 401);

  await uploadThink(data, user);
}

async function assembleBB() {
  if (Math.random() < 0.5) return;

  const delay = Math.floor(Math.random() * 8 * 60 * 1000);

  setTimeout(async () => {
    try {
      const hr = new Date().getHours();

      if (hr >= 6 && hr < 12)
        await processBot(
          morningBots,
          getBots.morning,
          (l) => (morningBots = l),
        );
      else if (hr >= 12 && hr < 18)
        await processBot(
          eveningBots,
          getBots.evening,
          (l) => (eveningBots = l),
        );
      else if (hr >= 18 && hr < 24)
        await processBot(nightBots, getBots.night, (l) => (nightBots = l));
    } catch (err) {
      console.error("assembleBB error:", err);
    }
  }, delay);
}

cron.schedule("0 5 * * *", reloadBots);

cron.schedule("*/10 * * * *", assembleBB);
