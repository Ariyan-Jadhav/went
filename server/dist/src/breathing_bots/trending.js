import { News } from "../models/trending.model.js";
import "dotenv/config";
import { AppError } from "../middleware/error.middleware.js";
import connectDB from "../database/db.mongo.js";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
async function fetchTrendingNewsFromGemini() {
    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const prompt = `You are a news aggregator for India. Today is ${today}.

Generate 5 realistic and informative trending news articles currently happening in India.

Return ONLY a valid JSON array with no markdown, no explanation, no extra text.
Each item must have exactly these fields:
- title: string (headline, max 150 chars)
- content: string (detailed news body, 200-400 words, informative and neutral)

Ensure news is India-focused, relevant to current trends, and written in a journalistic tone.`;
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: prompt,
                        },
                    ],
                },
            ],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 4096,
                responseMimeType: "application/json",
            },
        }),
    });
    if (!response.ok) {
        const errorBody = await response.text();
        throw new AppError(`Gemini API error: ${response.status} - ${errorBody}`, 500);
    }
    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
        throw new AppError("No content received from Gemini API", 500);
    }
    const cleaned = rawText.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);
    if (!Array.isArray(parsed)) {
        throw new AppError("Gemini returned invalid news format", 500);
    }
    return parsed;
}
await connectDB();
async function deletePreviousNews() {
    const previous = await News.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("_id");
    const ids = previous.map((doc) => doc._id);
    if (ids.length > 0) {
        await News.deleteMany({ _id: { $in: ids } });
        console.log(`Deleted ${ids.length} previous news articles.`);
    }
}
async function uploadNews() {
    console.log("Fetching trending India news at", new Date().toISOString());
    try {
        const newsItems = await fetchTrendingNewsFromGemini();
        await deletePreviousNews();
        const createdNews = await News.insertMany(newsItems.map((item) => ({
            title: item.title,
            content: item.content,
        })));
        console.log(`Successfully posted ${createdNews.length} trending news articles.`);
    }
    catch (error) {
        if (error instanceof AppError)
            throw error;
        console.error("Error uploading news:", error);
        throw new AppError("Failed to upload trending news", 500);
    }
}
// Runs every 3 hours: at 00:00, 03:00, 06:00, 09:00, 12:00, 15:00, 18:00, 21:00
// cron.schedule("0 */3 * * *", async () => {
//   try {
//     await uploadNews();
//   } catch (error) {
//     console.error("Cron job failed for trending news:", error);
//   }
// });
// // Export for manual trigger (e.g., on server start)
// export { uploadNews };
// uploadNews()
//   .catch((e) => {
//     console.error("failed to post:", e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     console.log("task completed!");
//   });
//# sourceMappingURL=trending.js.map