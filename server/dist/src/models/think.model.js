import mongoose, { Schema } from "mongoose";
const thinkSchema = new Schema({
    user_id: {
        type: String,
        index: true,
        required: [true, "user_id is required"],
    },
    content: {
        type: String,
        required: true,
        maxLength: 2000,
        trim: true,
    },
    imageUrl: [
        {
            url: {
                type: String,
                required: [true, "Image URL is required"],
            },
            publicId: {
                type: String,
                required: [true, "Public ID is required"],
            },
        },
    ],
    hashtags: [
        {
            type: String,
        },
    ],
    likesCount: {
        type: Number,
        default: 0,
        min: 0,
    },
    commentsCount: {
        type: Number,
        default: 0,
        min: 0,
    },
    rethinkCount: {
        type: Number,
        default: 0,
        min: 0,
    },
}, {
    timestamps: true,
});
thinkSchema.index({ user_id: 1, createdAt: -1 });
thinkSchema.index({ createdAt: -1 });
thinkSchema.index({ hashtags: 1 });
export const Think = mongoose.model("Think", thinkSchema);
//# sourceMappingURL=think.model.js.map