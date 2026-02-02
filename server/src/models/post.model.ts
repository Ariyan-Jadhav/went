import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  user_id: string;
  imageUrl: Array<{ url: string; publicId: string }>;
  caption?: string;
  likesCount: number;
  commentsCount: number;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>(
  {
    user_id: {
      type: String,
      required: [true, "user_id is required"],
      index: true,
    },

    imageUrl: [
      {
        url: { type: String, required: [true, "Url is required"] },
        publicId: { type: String, required: [true, "Public_Id is required"] },
      },
    ],

    caption: {
      type: String,
      maxLength: [250, "caption cannot exceed 50 characters"],
      trim: true,
    },
    likesCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    location: {
      type: String,
    },
    commentsCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

postSchema.index({ user_id: 1, createdAt: -1 });
postSchema.index({ createdAt: -1 });

export const Post = mongoose.model<IPost>("Post", postSchema);
