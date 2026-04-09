import cron from "node-cron";
import { Think } from "../../models/think.model.js";
import "dotenv/config";
import { AppError } from "../../middleware/error.middleware.js";
import connectDB from "../../database/db.mongo.js";
import { PostedArticle } from "../../models/posted.model.js";
import { engagePost3 } from "../comments/autoComments_3.js";

const CONFIG = {
  NEWSDATA_API_KEY: process.env.NEWSDATA_API_KEY,
  BOT_USER_ID: "news2",
  BOT_USERNAME: "unmaskedofficial",
};

// Matches the actual newsdata.io response shape
interface NewsdataArticle {
  article_id: string;
  title: string;
  description: string | null;
  link: string; // "url" in mediastack, "link" here
  image_url: string | null; // "image" in mediastack, "image_url" here
  pubDate: string;
  language: string;
  country: string[];
  category: string[];
  source_name: string;
  duplicate: boolean;
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

async function fetchNewsFromNewsdata() {
  await connectDB();

  const response = await fetch(
    `https://newsdata.io/api/1/latest?apikey=${CONFIG.NEWSDATA_API_KEY}&country=in&language=en`,
  );
  const data = await response.json();

  if (!data || !Array.isArray(data.results)) {
    throw new AppError("Unexpected response shape", 500);
  }

  // Fetch all already-posted IDs from DB
  const posted = await PostedArticle.find({}).select("article_id").lean();
  const postedIds = new Set(posted.map((p) => p.article_id));

  const article = (data.results as NewsdataArticle[]).find(
    (a) => !a.duplicate && !postedIds.has(a.article_id),
  );

  if (!article) throw new AppError("No new articles found", 500);

  const content = cleanText(article.description || article.title);

  const think = await Think.create({
    user_id: CONFIG.BOT_USER_ID,
    content,
    hashtags: article.category ?? [],
    imageUrl: article.image_url
      ? [{ url: article.image_url, publicId: "news_article" }]
      : [],
    likesCount: 0,
    commentsCount: 0,
    rethinkCount: 0,
  });

  if (!think) throw new AppError("could not post", 500);

  // Mark this article as posted
  await PostedArticle.create({ article_id: article.article_id });

  engagePost3(think._id.toString(), content, CONFIG.BOT_USER_ID);
}

cron.schedule("*/30 * * * *", fetchNewsFromNewsdata);
