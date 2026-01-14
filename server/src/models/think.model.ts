import mongoose, { Schema, Document } from "mongoose";

export interface Ithink extends Document {
  user_id: string;
  content: string;
  imageUrl?: Array<{
    url: string;
    publicId: string;
  }>;
  hashtags?: string[];
  mentions?: string[];
  likesCount: number;
  commentsCount: number;
  rethinkCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const thinkSchema = new Schema<Ithink>(
  {
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
    mentions: [
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
  },
  {
    timestamps: true,
  }
);

thinkSchema.index({ user_id: 1, createdAt: -1 });
thinkSchema.index({ createdAt: -1 });
thinkSchema.index({ hashtags: 1 });

export const Think = mongoose.model<Ithink>("Think", thinkSchema);
