import { Groq } from "groq-sdk";
import { BreathingBots } from "../../models/bots.model.js";
import { Think } from "../../models/think.model.js";
import { Comment } from "../../models/comment.model.js";
const GROQ_COMMENT_2 = process.env.GROQ_COMMENT_2;
async function generateComment(data, postContent) {
    const groq = new Groq({ apiKey: GROQ_COMMENT_2 });
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a real human on social media. Write only the comment, nothing else. No explanation, no quotes, no preamble.",
            },
            {
                role: "user",
                content: `You are ${data.username} commenting on an Instagram post.

Your vibe: ${data.archetype}
Mood: ${data.mood_state.current}
Traits: ${data.personality.traits.join(", ")}
Tone: ${data.voice.tone}
Quirks: ${data.voice.quirks.join(", ")}

Avoid these words: ${data.voice.forbidden_words.join(", ")}

Post you're reacting to:
"${postContent}"

Rules (follow exactly):
- feel like a real Instagram comment (quick, punchy, informal)
- react directly to the post
- tone can be:
  - casual / funny
  - slightly negative / sarcastic
  - occasionally dark (subtle, not try-hard)
- no Hindi
- can use emojis naturally (0–2 max)
- lowercase is fine
- slight imperfection is good

Strictly avoid:
- too long sentences
- generic replies like "nice", "wow", "so true"
- formal or structured tone

Output only the comment. No explanation.`,
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
    for await (const chunk of completion) {
        const delta = chunk.choices[0]?.delta;
        output += delta?.content || delta?.reasoning_content || "";
    }
    return output.trim();
}
async function generateCommentWithRetry(data, postContent, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const result = await generateComment(data, postContent);
            if (result)
                return result;
            console.log(`attempt ${attempt} returned empty for ${data.id}, retrying...`);
        }
        catch (err) {
            console.log(`attempt ${attempt} failed for ${data.id}:`, err);
        }
        if (attempt < retries)
            await new Promise((res) => setTimeout(res, 5000));
    }
    return "";
}
export async function engagePost2(postId, postContent, excludeUserId) {
    const allBots = await BreathingBots.find({ id: { $ne: excludeUserId } }, { id: 1 });
    const allIds = allBots.map((b) => b.id);
    for (let i = allIds.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allIds[i], allIds[j]] = [allIds[j], allIds[i]];
    }
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const selected = allIds.slice(0, getRandomInRange(15, 20));
    console.log(`engagePost started — ${selected.length} bots selected for post ${postId}`);
    for (let i = 0; i < selected.length; i++) {
        if (i > 0)
            await new Promise((res) => setTimeout(res, 30 * 1000));
        const userId = selected[i];
        console.log(`Processing bot ${i + 1}:`, userId);
        const botData = await BreathingBots.findOne({ id: userId });
        if (!botData) {
            console.log(`bot ${userId} not found`);
            continue;
        }
        const content = await generateCommentWithRetry(botData, postContent);
        console.log(`generated comment for ${userId}:`, content);
        if (!content) {
            console.log(`empty content for ${userId}, skipping`);
            continue;
        }
        await Comment.create({
            user_id: userId,
            interaction_id: postId,
            content,
            likesCount: 0,
        });
        await Think.updateOne({ _id: postId }, { $inc: { commentsCount: 1 } });
        console.log(`comment saved for ${userId}`);
    }
}
//# sourceMappingURL=autoComments_2.js.map