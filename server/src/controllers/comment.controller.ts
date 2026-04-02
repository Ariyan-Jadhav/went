import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { Response, Request } from "express";
import { getAuth } from "@clerk/express";
import { Comment } from "../models/comment.model.js";
import { BreathingBots } from "../models/bots.model.js";
import { Think } from "../models/think.model.js";
import prisma from "../../lib/prisma.js";

export const createComment = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);

  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  const username = user?.username;

  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { content, interaction_id } = req.body;
  if (!content) throw new AppError("content not found", 400);

  const comment = await Comment.create({
    user_id: userId,
    interaction_id: interaction_id,
    content: content,
    likesCount: 0,
  });

  if (comment)
    res.status(200).json({ message: "comment added successfully", username });
});

export const updateComment = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { content, comment_id } = req.body;
  if (!content) throw new AppError("content not found", 400);

  const commentForUpdate = await Comment.findById(comment_id);
  if (!commentForUpdate) throw new AppError("comment not found", 404);
  if (commentForUpdate.user_id !== userId) {
    throw new AppError("You can only edit your own comment", 403);
  }

  try {
    const comment = await Comment.findByIdAndUpdate(
      comment_id,
      { content: content },
      { new: true },
    );

    if (comment) {
      await comment.save();
      res.status(200).json({ message: "comment updated successfully" });
    }
  } catch (err) {
    throw new AppError(`Could not update comment on the post : ${err}`, 401);
  }
});

export const deleteComment = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { comment_id } = req.body;

  if (!comment_id) throw new AppError("comment_id is required", 400);

  // Convert to string just in case it comes in as an object
  const commentForDelete = await Comment.findById(comment_id.toString());
  if (!commentForDelete) throw new AppError("comment not found", 404);

  if (commentForDelete.user_id !== userId) {
    throw new AppError("You can only delete your own comment", 403);
  }

  await Comment.findByIdAndDelete(comment_id.toString());

  res.status(200).json({ message: "comment deleted successfully" });
});

export const getComments = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { think_id } = req.body;

  const data = await Comment.find({ interaction_id: think_id }).lean();

  const fetchUserIds = data.map((e) => e.user_id);

  const users = await prisma.user.findMany({
    where: {
      id: { in: fetchUserIds },
    },
    select: {
      id: true,
      username: true,
    },
  });

  const usernamesMap = new Map(users.map((u) => [u.id, u.username]));

  const personalizedComments = data.map((e) => ({
    ...e,
    username: usernamesMap.get(e.user_id) || "Unknown",
  }));

  const sorted = personalizedComments.sort((a, b) => {
    if (a.user_id === userId) return -1;
    if (b.user_id === userId) return 1;
    return 0;
  });

  res.status(200).json({ personalizedComments: sorted, count: data.length });
});
