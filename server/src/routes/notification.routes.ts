import express from "express";
import {
  getNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
} from "../controllers/notification.controller.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.get("/", requireAuth(), getNotifications);
router.patch("/:notificationId/read", requireAuth(), markAsRead);
router.patch("/read-all", requireAuth(), markAllAsRead);
router.delete("/:notificationId", requireAuth(), deleteNotification);

export default router;
