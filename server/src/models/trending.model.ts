import mongoose, { Schema, Document } from "mongoose";

export interface INews extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const newsSchema = new Schema<INews>(
  {
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
  },
  {
    timestamps: true,
  },
);

newsSchema.index({ createdAt: -1 });

export const News = mongoose.model<INews>("News", newsSchema);
