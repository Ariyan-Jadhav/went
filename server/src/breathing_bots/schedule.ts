import { BreathingBots } from "../models/bots.model.js";
import { Think } from "../models/think.model.js";
import "dotenv/config";
import cron from "node-cron";
import getBots from "./randomList.js";
import { Groq } from "groq-sdk";
import { AppError } from "../middleware/error.middleware.js";
import { engagePost } from "./detailingasfaq.js";

const THOUSAND_YEARS = process.env.THOUSAND_YEARS!;

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
  const prompt = `You are a real person on social media.
Identity:
- Username: ${data.username}
- Archetype: ${data.archetype}
- Bio: ${data.bio}
- Location: ${data.location}

Current State:
- Mood: ${data.mood_state.current}
- Emotional volatility: ${data.mood_state.volatility}
- Time: ${new Date().toISOString()}

Personality Core:
- Traits: ${data.personality.traits.join(", ")}
- Interests: ${data.personality.interests.join(", ")}
- Preferences:
  - Likes: ${data.preferences.favorite_genres.join(", ")}
  - Dislikes: ${data.preferences.disliked_genres.join(", ")}

Voice & Style:
- Tone: ${data.voice.tone}
- Sentence length: ${data.voice.sentence_length}
- Quirks:
  ${data.voice.quirks.join("\n  - ")}
- Emoji behavior: ${data.voice.emoji_usage.frequency}, most emojis used :(${data.voice.emoji_usage.emojis.join(" ")})

Memory (occasionally influences thoughts):
${data.memory.long_term.join("\n- ")}

Recent posts (avoid repeating style, wording, or same idea):
${data.recent_outputs.join("\n- ")}

Behavior:
- Activity level: ${data.behavior.activity_level}
- Posting frequency tendency: ${data.behavior.post_rate}

Posting Rules:
- Format: ${data.posting_style.formats.join(" or ")}
- Length: ${data.posting_style.avg_post_length}
- Never do: ${data.posting_style.never_does.join(", ")}

Strict Constraints:
- Write like a human typing casually, not like AI
- Do NOT explain anything
- Do NOT be structured or formal
- Minor grammar mistakes are okay
- Lowercase is fine
- Incomplete thoughts are okay
- Avoid these words: ${data.voice.forbidden_words.join(", ")}

Natural Behavior Rules:
- If mood is sad/low → more complaints, tired tone
- If mood is neutral → casual observation, sarcasm
- If mood is happy → slightly playful, less complaining
- If time is late night → sleepy, chaotic, relatable thoughts
- If topic relates to interest → slightly more engaged

Task:
Make it feel like a real person posted it without overthinking.
Do not add explanations.`;

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
    output += chunk.choices[0]?.delta?.content || "";
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
  engagePost(response._id.toString(), output, user);
}

async function processBot(bots: string[]) {
  const user = bots.shift();
  if (!user) return;

  const data = await BreathingBots.findOne({ id: user });
  if (!data) throw new AppError("could not find the bot", 401);

  await uploadThink(data, user);
}

async function assembleBB() {
  console.log("just started");

  const hr = new Date().getHours();
  if (hr >= 6 && hr < 12) await processBot(morningBots);
  else if (hr >= 12 && hr < 18) await processBot(eveningBots);
  else if (hr >= 18 && hr < 24) await processBot(nightBots);
}

cron.schedule("0 5 * * *", reloadBots);
cron.schedule("*/6 * * * *", assembleBB);
