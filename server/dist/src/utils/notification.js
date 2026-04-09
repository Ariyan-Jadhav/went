import { Notification } from "../models/notification.model.js";
import { io, userSockets } from "../index.js";
export const createNotification = async (recipient_id, sender_id, type, message, reference_id) => {
    if (recipient_id === sender_id)
        return;
    const notification = await Notification.create({
        recipient_id,
        sender_id,
        type,
        message,
        reference_id,
    });
    const socketId = userSockets.get(recipient_id);
    if (socketId)
        io.to(socketId).emit("new_notification", notification);
    return notification;
};
//# sourceMappingURL=notification.js.map