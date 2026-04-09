import mongoose, { Schema } from "mongoose";
const commentSchema = new Schema({
    user_id: {
        type: String,
        index: true,
        required: [true, "user_id is required"],
    },
    interaction_id: {
        type: String,
        index: true,
        required: [true, "interaction_id is required"],
    },
    content: {
        type: String,
        required: true,
        maxLength: 2000,
        trim: true,
    },
    likesCount: {
        type: Number,
        default: 0,
        min: 0,
    },
}, {
    timestamps: true,
});
commentSchema.index({ createdAt: -1 });
commentSchema.index({ user_id: 1, createdAt: -1 });
commentSchema.index({ user_id: 1, likesCount: -1 });
export const Comment = mongoose.model("Comment", commentSchema);
//# sourceMappingURL=comment.model.js.map