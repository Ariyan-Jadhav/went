import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
  user_id: string;
  interaction_id: string;
  type: "post" | "think";
  content: string;
  likesCount: number;
  createdAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    user_id: {
      type: String,
      index: true,
      required: [true, "user_id is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
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
  },
  {
    timestamps: true,
  }
);

commentSchema.index({ interaction_id: 1, createdAt: -1 });
commentSchema.index({ user_id: 1, createdAt: -1 });
commentSchema.index({ user_id: 1, likesCount: -1 });

export const Comment = mongoose.model<IComment>("Comment", commentSchema);
