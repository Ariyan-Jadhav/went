import mongoose, { Schema } from "mongoose";
const notificationSchema = new Schema({
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
        enum: ["follow", "like", "comment"],
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
}, { timestamps: true });
// Compound index for efficient queries
notificationSchema.index({ recipient_id: 1, createdAt: -1 });
notificationSchema.index({ recipient_id: 1, read: 1 });
export const Notification = mongoose.model("Notification", notificationSchema);
//# sourceMappingURL=notification.model.js.map