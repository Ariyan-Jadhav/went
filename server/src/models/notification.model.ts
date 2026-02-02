import mongoose, { Document, Schema } from "mongoose";

export interface INotification extends Document {
  recipient_id: string;
  sender_id: string;
  type: string;
  message: string;
  reference_id?: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const notificationSchema = new Schema<INotification>(
  {
    recipient_id: {
      type: String,
      index: true,
      required: [true, "recipient_id is required"],
    },
    sender_id: {
      type: String,
      index: true,
      required: [true, "sender_id is required"],
    },
    type: {
      type: String,
      index: true,
      required: [true, "type is required"],
      enum: ["follow", "like", "comment", "mention"], // Add more types as needed
    },
    message: {
      type: String,
      required: [true, "message is required"],
    },
    reference_id: {
      type: String,
      index: true,
    },
    read: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  { timestamps: true }
);

// Compound index for efficient queries
notificationSchema.index({ recipient_id: 1, createdAt: -1 });
notificationSchema.index({ recipient_id: 1, read: 1 });

export const Notification = mongoose.model<INotification>(
  "Notification",
  notificationSchema
);
