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

interface NewsdataArticle {
  article_id: string;
  title: string;
  description: string | null;
  link: string;
  image_url: string | null;
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
  const response = await fetch(
    `https://newsdata.io/api/1/latest?apikey=${CONFIG.NEWSDATA_API_KEY}&country=in&language=en`,
  );
  const data = await response.json();

  if (!data || !Array.isArray(data.results)) {
    throw new AppError("Unexpected response shape", 500);
  }

  const posted = await PostedArticle.find({}).select("article_id").lean();
  const postedIds = new Set(posted.map((p) => p.article_id));

  const candidates = (data.results as NewsdataArticle[]).filter(
    (a) => !a.duplicate && !postedIds.has(a.article_id),
  );

  if (!candidates.length) throw new AppError("No new articles found", 500);

  let article: NewsdataArticle | null = null;
  let content = "";

  for (const candidate of candidates) {
    const c = cleanText(candidate.description || candidate.title);
    const exists = await Think.findOne({
      user_id: CONFIG.BOT_USER_ID,
      content: c,
    }).lean();

    if (exists) {
      await PostedArticle.create({ article_id: candidate.article_id }).catch(
        (err) => {
          if (err.code !== 11000) throw err;
        },
      );
      continue;
    }

    article = candidate;
    content = c;
    break;
  }

  if (!article) throw new AppError("All articles are duplicates", 500);

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

  try {
    await PostedArticle.create({ article_id: article.article_id });
  } catch (err: any) {
    if (err.code === 11000) {
      console.log("Race condition caught — article already posted, skipping.");
      return;
    }
    throw err;
  }

  engagePost3(think._id.toString(), content, CONFIG.BOT_USER_ID);
}

cron.schedule("*/45 * * * *", fetchNewsFromNewsdata);
