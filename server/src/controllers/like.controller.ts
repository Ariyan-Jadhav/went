import prisma from "../../lib/prisma.js";
import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { Response, Request } from "express";
import { getAuth } from "@clerk/express";
import { Think } from "../models/think.model.js";
import { Post } from "../models/post.model.js";
import { Comment } from "../models/comment.model.js";

export const togglePostLike = catchAsync(
  async (req: Request, res: Response) => {
    const { post_id } = req.body;

    const { isAuthenticated, userId } = getAuth(req);

    if (!isAuthenticated) throw new AppError("User not authenticated", 401);
    if (!userId) throw new AppError("User not found", 401);

    const post = await Post.findById(post_id);
    if (!post) throw new AppError("Post not found", 401);

    const existingLike = await prisma.like.findUnique({
      where: {
        user_id_interaction_id: {
          interaction_id: post_id as string,
          user_id: userId,
        },
      },
    });

    if (!existingLike) {
      await prisma.like.create({
        data: {
          interaction_id: post_id as string,
          user_id: userId,
        },
      });

      await Post.findByIdAndUpdate(
        post_id,
        {
          $inc: { likesCount: 1 },
        },
        { new: true }
      );

      return res.status(200).json(` ${userId} Liked the post at ${Date.now()}`);
    } else {
      await prisma.like.delete({
        where: {
          user_id_interaction_id: {
            interaction_id: post_id as string,
            user_id: userId,
          },
        },
      });

      await Post.findByIdAndUpdate(
        post_id,
        { $inc: { likesCount: -1 } },
        { new: true }
      );

      return res
        .status(200)
        .json(` ${userId} Disliked the post at ${Date.now()}`);
    }
  }
);

export const toggleThinkLike = catchAsync(
  async (req: Request, res: Response) => {
    const { think_id } = req.body;

    const { isAuthenticated, userId } = getAuth(req);

    if (!isAuthenticated) throw new AppError("User not authenticated", 401);
    if (!userId) throw new AppError("User not found", 401);

    const think = await Think.findById(think_id);
    if (!think) throw new AppError("think not found", 401);

    const existingThink = await prisma.like.findUnique({
      where: {
        user_id_interaction_id: {
          interaction_id: think_id as string,
          user_id: userId,
        },
      },
    });

    if (!existingThink) {
      await prisma.like.create({
        data: {
          interaction_id: think_id as string,
          user_id: userId,
        },
      });

      await Think.findByIdAndUpdate(
        think_id,
        {
          $inc: { likesCount: 1 },
        },
        { new: true }
      );

      return res
        .status(200)
        .json(` ${userId} Liked the think at ${Date.now()}`);
    } else {
      await prisma.like.delete({
        where: {
          user_id_interaction_id: {
            interaction_id: think_id as string,
            user_id: userId,
          },
        },
      });

      await Think.findByIdAndUpdate(
        think_id,
        { $inc: { likesCount: -1 } },
        { new: true }
      );

      return res
        .status(200)
        .json(` ${userId} Disliked the think at ${Date.now()}`);
    }
  }
);

export const toggleCommentLike = catchAsync(
  async (req: Request, res: Response) => {
    const { comment_id } = req.body;

    const { isAuthenticated, userId } = getAuth(req);

    if (!isAuthenticated) throw new AppError("User not authenticated", 401);
    if (!userId) throw new AppError("User not found", 401);

    const comment = await Comment.findById(comment_id);
    if (!comment) throw new AppError("comment not found", 401);

    const existingComment = await prisma.like.findUnique({
      where: {
        user_id_interaction_id: {
          interaction_id: comment_id as string,
          user_id: userId,
        },
      },
    });

    if (!existingComment) {
      await prisma.like.create({
        data: {
          interaction_id: comment_id as string,
          user_id: userId,
        },
      });

      await Comment.findByIdAndUpdate(
        comment_id,
        {
          $inc: { likesCount: 1 },
        },
        { new: true }
      );

      return res
        .status(200)
        .json(` ${userId} Liked the comment at ${Date.now()}`);
    } else {
      await prisma.like.delete({
        where: {
          user_id_interaction_id: {
            interaction_id: comment_id as string,
            user_id: userId,
          },
        },
      });

      await Comment.findByIdAndUpdate(
        comment_id,
        { $inc: { likesCount: -1 } },
        { new: true }
      );

      return res
        .status(200)
        .json(` ${userId} Disliked the comment at ${Date.now()}`);
    }
  }
);
