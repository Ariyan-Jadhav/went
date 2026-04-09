import { getAuth } from "@clerk/express";
import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { Notification } from "../models/notification.model.js";
import prisma from "../../lib/prisma.js";
// Get all notifications for the authenticated user
export const getNotifications = catchAsync(async (req, res) => {
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const rawNotifications = await Notification.find({
        recipient_id: userId,
    })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean();
    const senderId = rawNotifications.map((e) => e.sender_id);
    const dataset = await prisma.user.findMany({
        where: {
            id: { in: senderId },
        },
    });
    const usernameMap = new Map(dataset.map((e) => [e.id, e.username]));
    const profilePicMap = new Map(dataset.map((e) => [e.id, e.profilePicUrl]));
    const notifications = rawNotifications.map((e) => ({
        ...e,
        username: usernameMap.get(e.sender_id),
        profilePic: profilePicMap.get(e.sender_id),
    }));
    const total = await Notification.countDocuments({
        recipient_id: userId,
    });
    return res.status(200).json({
        success: true,
        notifications,
        pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
        },
    });
});
// Mark notification as read
export const markAsRead = catchAsync(async (req, res) => {
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const { notificationId } = req.params;
    const notification = await Notification.findOneAndUpdate({
        _id: notificationId,
        recipient_id: userId,
    }, { $set: { read: true } }, { new: true });
    if (!notification) {
        throw new AppError("Notification not found", 404);
    }
    return res.status(200).json({
        success: true,
        message: "Notification marked as read",
    });
});
// Mark all notifications as read
export const markAllAsRead = catchAsync(async (req, res) => {
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    await Notification.updateMany({ recipient_id: userId, read: false }, { $set: { read: true } });
    return res.status(200).json({
        success: true,
        message: "All notifications marked as read",
    });
});
// Delete a notification
export const deleteNotification = catchAsync(async (req, res) => {
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const { notificationId } = req.params;
    const notification = await Notification.findOneAndDelete({
        _id: notificationId,
        recipient_id: userId,
    });
    if (!notification) {
        throw new AppError("Notification not found", 404);
    }
    return res.status(200).json({
        success: true,
        message: "Notification deleted",
    });
});
//# sourceMappingURL=notification.controller.js.map