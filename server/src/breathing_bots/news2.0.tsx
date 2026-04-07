import cron from "node-cron";
import { Think } from "../models/think.model.js";
import "dotenv/config";
import { AppError } from "../middleware/error.middleware.js";
import connectDB from "../database/db.mongo.js";
import fs from "fs";
import { engagePost } from "./detailingasfaq.js";

const CONFIG = {
  NEWSDATA_API_KEY: process.env.NEWSDATA_API_KEY,
  BOT_USER_ID: "news2",
  BOT_USERNAME: "unmaskedofficial",
};

const CACHE_FILE = "./last_posted.json";

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

function loadPostedIds(): string[] {
  try {
    const data = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
    return data.ids ?? [];
  } catch {
    return []; // first run, file doesn't exist yet
  }
}

function savePostedId(id: string): void {
  const ids = loadPostedIds();
  ids.push(id);
  if (ids.length > 10) ids.shift(); // keep last 10, drop oldest
  fs.writeFileSync(CACHE_FILE, JSON.stringify({ ids }), "utf-8");
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

  // newsdata.io returns { status, totalResults, results: [...] }
  if (!data || !Array.isArray(data.results)) {
    throw new AppError("Unexpected response shape", 500);
  }

  const postedIds = loadPostedIds();

  const article = (data.results as NewsdataArticle[]).find(
    (a) => !a.duplicate && !postedIds.includes(a.article_id), // skip duplicates AND already posted
  );

  if (!article) throw new AppError("No new articles found", 500);

  const content = cleanText(article.description || article.title);

  const think = await Think.create({
    user_id: CONFIG.BOT_USER_ID,
    content,
    hashtags: article.category ?? [], // newsdata.io gives us categories for free 🎁
    imageUrl: article.image_url
      ? [{ url: article.image_url, publicId: "news_article" }]
      : [],
    likesCount: 0,
    commentsCount: 0,
    rethinkCount: 0,
  });

  if (!think) throw new AppError("could not post", 500);

  engagePost(think._id.toString(), content, CONFIG.BOT_USER_ID);

  savePostedId(article.article_id); // store article_id, not URL
  console.log(
    `✅ Posted [${article.source_name}]: "${article.title.slice(0, 60)}…"`,
  );
}

fetchNewsFromNewsdata()
  .catch((e) => {
    console.error("failed to post:", e);
    process.exit(1);
  })
  .finally(() => {
    console.log("task completed!");
  });
