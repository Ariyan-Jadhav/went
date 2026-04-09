import mongoose, { Schema } from "mongoose";
const newsSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        trim: true,
        maxLength: 500,
    },
    content: {
        type: String,
        required: [true, "content is required"],
        trim: true,
        maxLength: 10000,
    },
}, {
    timestamps: true,
});
newsSchema.index({ createdAt: -1 });
export const News = mongoose.model("News", newsSchema);
//# sourceMappingURL=trending.model.js.map