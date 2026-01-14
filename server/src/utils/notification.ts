import { Notification } from "../models/notification.model.js";
import { io, userSockets } from "../index.js";

export const createNotification = async (
  recipient_id: string,
  sender_id: string,
  type: string,
  message: string,
  reference_id: string
) => {
  if (recipient_id === sender_id) return;

  const notification = await Notification.create({
    recipient_id,
    sender_id,
    type,
    message,
    reference_id,
  });

  const socketId = userSockets.get(recipient_id);
  if (socketId) io.to(socketId).emit("new_notification", notification);

  return notification;
};
