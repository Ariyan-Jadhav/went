import { BreathingBots } from "../models/bots.model.js";
import { Think } from "../models/think.model.js";
import { Comment } from "../models/comment.model.js";
import { Groq } from "groq-sdk";

const THOUSAND_YEARS = process.env.THOUSAND_YEARS!;

async function generateComment(
  data: InstanceType<typeof BreathingBots>,
  postContent: string,
): Promise<string> {
  console.log("generate comment just started");
  console.log(data);
  console.log(postContent);

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
        content: `You are a real person on social media.
Identity:
- Username: ${data.username}
- Archetype: ${data.archetype}
- Bio: ${data.bio}
- Location: ${data.location}

Current State:
- Mood: ${data.mood_state.current}
- Emotional volatility: ${data.mood_state.volatility}

Personality Core:
- Traits: ${data.personality.traits.join(", ")}
- Interests: ${data.personality.interests.join(", ")}

Voice & Style:
- Tone: ${data.voice.tone}
- Quirks: ${data.voice.quirks.join(", ")}
- Emoji behavior: ${data.voice.emoji_usage.frequency}, most emojis used: (${data.voice.emoji_usage.emojis.join(" ")})
- Avoid these words: ${data.voice.forbidden_words.join(", ")}

Post you are commenting on:
"${postContent}"

Task:
Write a single short comment (1 sentence max) reacting to the post above.
Stay in character. Be casual, human, imperfect. No explanations.`,
      },
    ],
    model: "openai/gpt-oss-120b",
    temperature: 0.9,
    max_completion_tokens: 100,
    top_p: 0.95,
    stream: true,
    reasoning_effort: "medium",
    stop: null,
  });

  let output = "";
  for await (const chunk of chatCompletion) {
    output += chunk.choices[0]?.delta?.content || "";
  }

  return output.trim();
}

export async function engagePost(
  postId: string,
  postContent: string,
  excludeUserId: string,
) {
  console.log(excludeUserId);

  const allBots = await BreathingBots.find(
    { id: { $ne: excludeUserId } },
    { id: 1 },
  );

  const allIds = allBots.map((b) => b.id);

  for (let i = allIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allIds[i]!, allIds[j]!] = [allIds[j]!, allIds[i]!];
  }

  const selected = allIds.slice(0, 60);

  for (let i = 0; i < selected.length; i++) {
    await new Promise((res) => setTimeout(res, 30 * 1000));

    const userId = selected[i]!;
    console.log(`Processing bot ${i + 1}/60:`, userId);

    const botData = await BreathingBots.findOne({ id: userId });
    if (!botData) {
      console.log(`bot ${userId} not found`);
      continue;
    }

    const content = await generateComment(botData, postContent);
    console.log(`generated comment for ${userId}:`, content);
    if (!content) {
      console.log(`empty content for ${userId}, skipping`);
      continue;
    }

    await Comment.create({
      user_id: userId,
      interaction_id: postId,
      type: "think",
      content,
      likesCount: 0,
    });

    await Think.updateOne({ _id: postId }, { $inc: { commentsCount: 1 } });
    console.log(`comment saved for ${userId}`);
  }
}
