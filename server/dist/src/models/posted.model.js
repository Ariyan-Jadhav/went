// models/postedArticle.model.ts
import mongoose from "mongoose";
const postedArticleSchema = new mongoose.Schema({
    article_id: { type: String, required: true, unique: true },
    postedAt: { type: Date, default: Date.now },
});
export const PostedArticle = mongoose.model("PostedArticle", postedArticleSchema);
//# sourceMappingURL=posted.model.js.map