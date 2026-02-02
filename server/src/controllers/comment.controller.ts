import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { Response, Request } from "express";
import { getAuth } from "@clerk/express";
import { Comment } from "../models/comment.model.js";
import { Post } from "../models/post.model.js";
import { Think } from "../models/think.model.js";

export const createComment = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { content, interaction_id, type } = req.body;
  if (!content) throw new AppError("content not found", 400);

  if (type === "post") {
    const post = await Post.findById(interaction_id);
    if (!post) throw new AppError("Post not found", 404);
  } else if (type === "think") {
    const think = await Think.findById(interaction_id);
    if (!think) throw new AppError("Think not found", 404);
  }

  const comment = await Comment.create({
    user_id: userId,
    interaction_id: interaction_id,
    type: type,
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
      { new: true }
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
