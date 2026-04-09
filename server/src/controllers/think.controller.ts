import { Response, Request } from "express";
import { getAuth } from "@clerk/express";
import { AppError, catchAsync } from "../middleware/error.middleware.js";
import { uploadmedia, deleteMediafromCloudinary } from "../utils/cloudinary.js";
import { promises as fs } from "fs";
import { Think } from "../models/think.model.js";
import prisma from "../../lib/prisma.js";
import { engagePost3 } from "../breathing_bots/comments/autoComments_3.js";

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

  const { content, hashtags }: thinkBody = req.body;
  if (!content) throw new AppError("content not found", 400);

  const parsedHashtags = Array.isArray(hashtags)
    ? hashtags
    : hashtags
      ? [hashtags]
      : [];

  const fixedHashtags = parsedHashtags.map((tag: string) =>
    tag.startsWith("#") ? tag : `#${tag}`,
  );

  const images = req.files as Express.Multer.File[];
  let imageUrl: { url: string; publicId: string }[] = [];

  if (images?.length > 0) {
    if (images.length > 4)
      throw new AppError("you can only upload up to 4 images", 400);

    const uploadResults = await Promise.all(
      images.map((file) => uploadmedia(file.path, "went/thinks")),
    );

    imageUrl = uploadResults.map((url) => ({
      url: url.secure_url,
      publicId: url.public_id,
    }));

    await Promise.all(
      images.map((file) => fs.unlink(file.path).catch(console.error)),
    );
  }

  try {
    const think = await Think.create({
      user_id: userId,
      content: content,
      imageUrl: imageUrl,
      hashtags: fixedHashtags,
      likesCount: 0,
      commentsCount: 0,
      rethinkCount: 0,
    });

    await engagePost3(think._id.toString(), content, userId);

    res.status(201).json({ message: think });
  } catch (error) {
    if (images?.length > 0) {
      await Promise.all(
        images.map((file) => fs.unlink(file.path).catch(console.error)),
      );
    }
    throw new AppError(`Could not create post: ${error}`, 401);
  }
});

export const updateThink = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { content, hashtags, think_id }: thinkBody = req.body;

  const thinkForUpdate = await Think.findById(think_id);
  if (!thinkForUpdate) throw new AppError("Think not found", 404);
  if (thinkForUpdate.user_id !== userId) {
    throw new AppError("You can only edit your own thinks", 403);
  }
  const fixedHashtags = hashtags?.map((tag: string) =>
    tag.startsWith("#") ? tag : `#${tag}`,
  );

  const availableUpdates: {
    content?: string;
    hashtags?: string[];
    mentions?: string[];
  } = {};

  if (content !== undefined) availableUpdates.content = content;
  if (hashtags !== undefined) availableUpdates.hashtags = fixedHashtags;

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
        deleteMediafromCloudinary(publicId.publicId),
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

export const reThink = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);

  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { think_id } = req.body;

  if (!think_id) {
    throw new AppError("think_id is required", 400);
  }

  const existing = await prisma.saved_Think.findUnique({
    where: {
      user_id_post_id: {
        user_id: userId,
        post_id: think_id,
      },
    },
  });

  if (existing) {
    await prisma.saved_Think.delete({
      where: {
        user_id_post_id: {
          user_id: userId,
          post_id: think_id,
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "unsaved successfully",
      saved: false,
    });
  }

  await prisma.saved_Think.create({
    data: {
      user_id: userId,
      post_id: think_id,
    },
  });

  return res.status(200).json({
    success: true,
    message: "saved successfully",
    saved: true,
  });
});

export const toggleThinkLike = catchAsync(
  async (req: Request, res: Response) => {
    const { think_id, user_id } = req.body;

    const { isAuthenticated, userId } = getAuth(req);
    if (!isAuthenticated) throw new AppError("User not authenticated", 401);
    if (!userId) throw new AppError("User not found", 401);

    const existingRethink = await prisma.saved_Think.findUnique({
      where: {
        user_id_post_id: { user_id: user_id, post_id: think_id },
      },
    });

    if (!existingRethink) {
      await prisma.saved_Think.create({
        data: {
          post_id: think_id as string,
          user_id: user_id,
        },
      });

      return res
        .status(200)
        .json(` ${userId} Liked the think at ${Date.now()}`);
    } else {
      await prisma.saved_Think.delete({
        where: {
          user_id_post_id: {
            user_id: user_id,
            post_id: think_id,
          },
        },
      });

      return res
        .status(200)
        .json(` ${userId} Disliked the think at ${Date.now()}`);
    }
  },
);

export const getThinksByUser = catchAsync(
  async (req: Request, res: Response) => {
    const { isAuthenticated, userId } = getAuth(req);
    if (!isAuthenticated) throw new AppError("User not authenticated", 401);
    if (!userId) throw new AppError("User not found", 401);

    const { username } = req.body;

    if (!username) throw new AppError("Username not found", 401);

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) throw new AppError("User not found", 404);

    const data = await Think.find({
      user_id: user.id,
    })
      .sort({ createdAt: -1 })
      .lean();

    const thinksUsers = data.map((e) => e.user_id);

    const dataset = await prisma.user.findMany({
      where: { id: { in: thinksUsers } },
      select: {
        username: true,
        profilePicUrl: true,
        id: true,
      },
    });

    const imageMap = new Map(dataset.map((u) => [u.id, u.profilePicUrl]));

    const usernamesMap = new Map(dataset.map((u) => [u.id, u.username]));

    const thinks = data.map((e) => ({
      ...e,
      username: usernamesMap.get(e.user_id),
      userImageUrl: imageMap.get(e.user_id),
    }));

    res.status(200).json({ thinks, user });
  },
);

export const getUserRepostThink = catchAsync(
  async (req: Request, res: Response) => {
    const { isAuthenticated, userId } = getAuth(req);
    if (!isAuthenticated) throw new AppError("User not authenticated", 401);
    if (!userId) throw new AppError("User not found", 401);

    const { username } = req.body;

    if (!username) throw new AppError("Username not found", 401);

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) throw new AppError("User not found", 404);

    const savedThinks = await prisma.saved_Think.findMany({
      where: { user_id: user.id },
      select: {
        post_id: true,
      },
    });

    const filter = savedThinks.map((f) => f.post_id);

    const thinks = await Think.find({ _id: { $in: filter } })
      .lean()
      .sort({ _id: -1 });

    const fetchuserId = thinks.map((e) => e.user_id);

    const dataset = await prisma.user.findMany({
      where: {
        id: { in: fetchuserId },
      },
    });
    const usernamesMap = new Map(dataset.map((u) => [u.id, u.username]));
    const imageMap = new Map(dataset.map((u) => [u.id, u.profilePicUrl]));

    const personalizedThinks = thinks.map((e) => ({
      ...e,
      username: usernamesMap.get(e.user_id),
      userImageUrl: imageMap.get(e.user_id),
    }));

    res.status(200).json({ personalizedThinks });
  },
);
