import prisma from "../../lib/prisma.js";
import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { Response, Request } from "express";
import { getAuth } from "@clerk/express";

export const toggleFollow = catchAsync(async (req: Request, res: Response) => {
  const { personality_id } = req.body;
  if (personality_id) throw new AppError("could not find ID", 401);

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
    return res
      .status(200)
      .json(` ${userId} folllowed the user at ${Date.now()}`);
  } else {
    await prisma.follow.delete({
      where: {
        follower_id_following_id: {
          follower_id: userId,
          following_id: personality_id,
        },
      },
    });

    return res
      .status(200)
      .json(` ${userId} unfollowed the user at ${Date.now()}`);
  }
});
