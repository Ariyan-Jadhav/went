import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { Response, Request } from "express";
import { getAuth } from "@clerk/express";
import { Comment } from "../models/comment.model.js";
import { BreathingBots } from "../models/bots.model.js";
import { Think } from "../models/think.model.js";

export const createComment = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
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
  // const followers = prisma.cp.findMany({
  //   where: {
  //     following_id: userId,
  //   },
  // });
  // await createNotification();

  if (comment) res.status(200).json({ message: "comment added successfully" });
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

  const commentForUpdate = await Comment.findById(comment_id);
  if (!commentForUpdate) throw new AppError("comment not found", 404);
  if (commentForUpdate.user_id !== userId) {
    throw new AppError("You can only edit your own comment", 403);
  }
  try {
    await Comment.findByIdAndDelete(comment_id);
  } catch (err) {
    throw new AppError(`Could not delete comment on the post : ${err}`, 401);
  }
});

export const getComments = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { think_id } = req.body;

  const data = await Comment.find({ interaction_id: think_id }).lean();

  const fetchuserId = data.map((e) => e.user_id);

  const dataset = await BreathingBots.find({
    id: { $in: fetchuserId },
  }).lean();

  const usernamesMap = new Map(dataset.map((u) => [u.id, u.username]));

  const personalizedComments = data.map((e) => ({
    ...e,
    username: usernamesMap.get(e.user_id) || "Unknown",
  }));

  res.status(200).json({ personalizedComments, count: data.length });
});
