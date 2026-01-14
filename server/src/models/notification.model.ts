import mongoose, { Document, Schema } from "mongoose";

export interface INotification extends Document {
  recipient_id: string;
  sender_id: string;
  type: string;
  message: string;
  reference_id?: string;
  createdAt: Date;
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
    },
    message: {
      type: String,
    },
    reference_id: {
      type: String,
      index: true,
      required: [true, "reference_id is required"],
    },
  },
  { timestamps: true }
);

notificationSchema.index({ recipient_id: 1, createdAt: -1 });

export const Notification = mongoose.model<INotification>(
  "Notification",
  notificationSchema
);
