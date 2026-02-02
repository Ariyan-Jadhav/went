import prisma from "../../lib/prisma.js";
import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { Response, Request } from "express";
import { getAuth } from "@clerk/express";
import { Notification } from "../models/notification.model.js";
import { io, userSockets } from "../index.js";

export const toggleFollow = catchAsync(async (req: Request, res: Response) => {
  const { personality_id } = req.body;

  if (!personality_id) throw new AppError("could not find ID", 401);

  const { userId, isAuthenticated } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const existingFollow = await prisma.follow.findUnique({
    where: {
      follower_id_following_id: {
        follower_id: userId,
        following_id: personality_id,
      },
    },
  });

  if (!existingFollow) {
    await prisma.follow.create({
      data: {
        follower_id: userId,
        following_id: personality_id,
      },
    });

    const notification = await Notification.create({
      recipient_id: personality_id,
      sender_id: userId,
      type: "follow",
      message: "started following you",
      reference_id: userId, // Reference to the follower
    });

    const recipientSocketId = userSockets.get(personality_id);

    if (recipientSocketId) {
      io.to(recipientSocketId).emit("new-notification", {
        id: notification._id,
        sender_id: userId,
        type: "follow",
        message: "started following you",
        createdAt: notification.createdAt,
        read: false,
      });
      console.log(`Notification sent to user ${personality_id}`);
    } else {
      console.log(
        `User ${personality_id} is offline, notification saved to database`
      );
    }

    return res.status(200).json({
      success: true,
      message: "User followed successfully",
      action: "followed",
    });
  } else {
    await prisma.follow.delete({
      where: {
        follower_id_following_id: {
          follower_id: userId,
          following_id: personality_id,
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "User unfollowed successfully",
      action: "unfollowed",
    });
  }
});
