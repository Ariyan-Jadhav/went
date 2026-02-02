import { Response, Request } from "express";
import { getAuth } from "@clerk/express";
import { AppError, catchAsync } from "../middleware/error.middleware.js";
import { uploadmedia, deleteMediafromCloudinary } from "../utils/cloudinary.js";
import { promises as fs } from "fs";
import { Think } from "../models/think.model.js";
import { createNotification } from "../utils/notification.js";
import prisma from "../../lib/prisma.js";

interface thinkBody {
  content: string;
  hashtags: string[];
  mentions: string[];
  think_id: string;
  files: Express.Multer.File[];
}

export const createThink = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { content, hashtags, mentions }: thinkBody = req.body;
  if (!content) throw new AppError("content not found", 400);

  const fixedHashtags = hashtags?.map((tag: string) =>
    tag.startsWith("#") ? tag : `#${tag}`
  );

  const files = req.files as Express.Multer.File[];
  if (files?.length > 0) {
    if (files.length > 5)
      throw new AppError("you can only upload upto 5 images", 400);

    const uploadPromise = files.map((file) =>
      uploadmedia(file.path, "went/thinks")
    );
    const uploadResult = await Promise.all(uploadPromise);

    const imageUrl = uploadResult.map((url) => ({
      url: url.secure_url,
      publicId: url.public_id,
    }));

    try {
      const think = await Think.create({
        user_id: userId,
        content: content,
        imageUrl: imageUrl,
        hashtags: fixedHashtags,
        mentions: mentions,
        likesCount: 0,
        commentsCount: 0,
        rethinkCount: 0,
      });
      await Promise.all(files.map((file) => fs.unlink(file.path)));

      res.status(201).json({ message: think });
    } catch (error) {
      if (files)
        await Promise.all(
          files.map((file) => fs.unlink(file.path).catch(console.error))
        );
      throw new AppError(`Could not create post : ${error}`, 401);
    }
  }
});

export const updateThink = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { content, hashtags, mentions, think_id }: thinkBody = req.body;

  const thinkForUpdate = await Think.findById(think_id);
  if (!thinkForUpdate) throw new AppError("Think not found", 404);
  if (thinkForUpdate.user_id !== userId) {
    throw new AppError("You can only edit your own thinks", 403);
  }
  const fixedHashtags = hashtags?.map((tag: string) =>
    tag.startsWith("#") ? tag : `#${tag}`
  );

  const availableUpdates: {
    content?: string;
    hashtags?: string[];
    mentions?: string[];
  } = {};

  if (content !== undefined) availableUpdates.content = content;
  if (hashtags !== undefined) availableUpdates.hashtags = fixedHashtags;
  if (mentions !== undefined) availableUpdates.mentions = mentions;

  if (availableUpdates) {
    const think = await Think.findByIdAndUpdate(think_id, availableUpdates, {
      new: true,
    });
    if (!think) throw new AppError("Could not change the think", 400);

    await think.save();
    res.status(200).json({ message: "updated" });
  } else throw new AppError("Fill the credentials", 400);
});

export const deleteThink = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { think_id } = req.body;

  if (think_id) {
    try {
      const think = await Think.findById(think_id);
      if (think?.user_id !== userId) {
        throw new AppError("You can only edit your own posts", 403);
      }

      const publicIds = think.imageUrl?.map((publicId) =>
        deleteMediafromCloudinary(publicId.publicId)
      );
      if (publicIds) await Promise.all(publicIds);

      await Think.findByIdAndDelete(think_id);

      res.status(200).json({
        success: true,
        message: "think deleted successfully",
      });
    } catch (error) {
      throw new AppError("Could not delete think", 400);
    }
  }
});
