import prisma from "../../lib/prisma.js";
import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { getAuth } from "@clerk/express";
import { Think } from "../models/think.model.js";
import { Comment } from "../models/comment.model.js";
import { createNotification } from "../utils/notification.js";
export const toggleThinkLike = catchAsync(async (req, res) => {
    const { think_id } = req.body;
    const { isAuthenticated, userId } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const think = await Think.findById(think_id);
    if (!think)
        throw new AppError("think not found", 401);
    const existingThink = await prisma.like.findUnique({
        where: {
            user_id_interaction_id: {
                interaction_id: think_id,
                user_id: userId,
            },
        },
    });
    if (!existingThink) {
        await prisma.like.create({
            data: {
                interaction_id: think_id,
                user_id: userId,
            },
        });
        await Think.findByIdAndUpdate(think_id, {
            $inc: { likesCount: 1 },
        }, { new: true });
        await createNotification(think.user_id, // think owner receives it
        userId, // liker sends it
        "like", "liked your think", think_id);
        return res
            .status(200)
            .json(` ${userId} Liked the think at ${Date.now()}`);
    }
    else {
        await prisma.like.delete({
            where: {
                user_id_interaction_id: {
                    interaction_id: think_id,
                    user_id: userId,
                },
            },
        });
        await Think.findByIdAndUpdate(think_id, { $inc: { likesCount: -1 } }, { new: true });
        return res
            .status(200)
            .json(` ${userId} Disliked the think at ${Date.now()}`);
    }
});
export const toggleCommentLike = catchAsync(async (req, res) => {
    const { comment_id } = req.body;
    const { isAuthenticated, userId } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const comment = await Comment.findById(comment_id);
    if (!comment)
        throw new AppError("comment not found", 401);
    const existingComment = await prisma.like.findUnique({
        where: {
            user_id_interaction_id: {
                interaction_id: comment_id,
                user_id: userId,
            },
        },
    });
    if (!existingComment) {
        await prisma.like.create({
            data: {
                interaction_id: comment_id,
                user_id: userId,
            },
        });
        await Comment.findByIdAndUpdate(comment_id, {
            $inc: { likesCount: 1 },
        }, { new: true });
        return res
            .status(200)
            .json(` ${userId} Liked the comment at ${Date.now()}`);
    }
    else {
        await prisma.like.delete({
            where: {
                user_id_interaction_id: {
                    interaction_id: comment_id,
                    user_id: userId,
                },
            },
        });
        await Comment.findByIdAndUpdate(comment_id, { $inc: { likesCount: -1 } }, { new: true });
        return res
            .status(200)
            .json(` ${userId} Disliked the comment at ${Date.now()}`);
    }
});
//# sourceMappingURL=like.controller.js.map