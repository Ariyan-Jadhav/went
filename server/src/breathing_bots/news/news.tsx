import cron from "node-cron";
import { Think } from "../../models/think.model.js";
import "dotenv/config";
import { AppError } from "../../middleware/error.middleware.js";
import connectDB from "../../database/db.mongo.js";
import { engagePost3 } from "../comments/autoComments_3.js";
import { PostedArticle } from "../../models/posted.model.js";

const CONFIG = {
  NORTH_API_KEY: process.env.NORTH_API_KEY,
  BOT_USER_ID: "news1",
  BOT_USERNAME: "newsin24hrs",
};

interface MediastackArticle {
  title: string;
  description: string | null;
  url: string;
  image: string;
  published_at: string;
  language: string;
}

function cleanText(text: string): string {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchNewsFromMediastack() {
  await connectDB();

  const response = await fetch(
    `https://api.mediastack.com/v1/news?access_key=${CONFIG.NORTH_API_KEY}&countries=in&limit=5`,
  );

  const data = await response.json();

  if (!data || !Array.isArray(data.data)) {
    throw new AppError("Unexpected response shape", 500);
  }

  const posted = await PostedArticle.find({}).select("article_id").lean();
  const postedUrls = new Set(posted.map((p) => p.article_id));

  const article = (data.data as MediastackArticle[]).find(
    (a) => !postedUrls.has(a.url),
  );

  if (!article) throw new AppError("No new articles found", 500);

  const content = cleanText(article.description || article.title);

  const think = await Think.create({
    user_id: CONFIG.BOT_USER_ID,
    content,
    hashtags: [],
    imageUrl: article.image
      ? [{ url: article.image, publicId: "news_article" }]
      : [],
    likesCount: 0,
    commentsCount: 0,
    rethinkCount: 0,
  });

  if (!think) throw new AppError("could not post", 500);

  await PostedArticle.create({ article_id: article.url }); // using URL as the unique ID since mediastack has no article_id

  engagePost3(think._id.toString(), content, CONFIG.BOT_USER_ID);
  console.log(`Posted: "${article.title.slice(0, 60)}…"`);
}
cron.schedule("*/45 * * * *", fetchNewsFromMediastack);
