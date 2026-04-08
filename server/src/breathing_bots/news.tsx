import cron from "node-cron";
import { Think } from "../models/think.model.js";
import "dotenv/config";
import { AppError } from "../middleware/error.middleware.js";
import connectDB from "../database/db.mongo.js";
import fs from "fs";
import { engagePost } from "./detailingasfaq.js";

const CONFIG = {
  NORTH_API_KEY: process.env.NORTH_API_KEY,
  BOT_USER_ID: "news1",
  BOT_USERNAME: "newsin24hrs",
};

const CACHE_FILE = "./last_posted.json";

interface MediastackArticle {
  title: string;
  description: string | null;
  url: string;
  image: string;
  published_at: string;
  language: string;
}

function loadPostedUrl(): string | null {
  try {
    const data = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
    return data.url ?? null;
  } catch {
    return null;
  }
}

function savePostedUrl(url: string): void {
  fs.writeFileSync(CACHE_FILE, JSON.stringify({ url }), "utf-8");
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

  const storedUrl = loadPostedUrl();

  const article = (data.data as MediastackArticle[]).find(
    (a) => a.url !== storedUrl, // doesn't match the last posted one
  );

  if (!article) throw new AppError("No new articles found", 500);

  const think = await Think.create({
    user_id: CONFIG.BOT_USER_ID,
    content: cleanText(article.description || article.title),
    hashtags: [],
    imageUrl: article.image
      ? [{ url: article.image, publicId: "news_article" }]
      : [],
    likesCount: 0,
    commentsCount: 0,
    rethinkCount: 0,
  });

  if (!think) throw new AppError("could not post", 500);

  engagePost(
    think._id.toString(),
    cleanText(article.description || article.title),
    CONFIG.BOT_USER_ID,
  );

  savePostedUrl(article.url); // overwrite old URL with new one
  console.log(`✅ Posted: "${article.title.slice(0, 60)}…"`);
}

cron.schedule("*/30 * * * *", fetchNewsFromMediastack);
