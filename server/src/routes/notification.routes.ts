import express from "express";
import {
  getNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", getNotifications);
router.patch("/:notificationId/read", markAsRead);
router.patch("/read-all", markAllAsRead);
router.delete("/:notificationId", deleteNotification);

export default router;
