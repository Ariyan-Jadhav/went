import { Response, Request } from "express";
import { getAuth } from "@clerk/express";
import { AppError, catchAsync } from "../middleware/error.middleware.js";
import { Think } from "../models/think.model.js";
import prisma from "../../lib/prisma.js";

export const explore = catchAsync(async (req: Request, res: Response) => {
  // ✅ No auth required — public endpoint
  let { skip }: { skip: number } = req.body;
  if (!skip) skip = 0;

  const LIMIT = 5;

  const thinksRaw = await Think.find({})
    .sort({ _id: -1 })
    .lean()
    .skip(skip)
    .limit(LIMIT + 1);

  const isEnd = thinksRaw.length <= LIMIT;
  const thinks = thinksRaw.slice(0, LIMIT);

  const fetchUserId = thinks.map((e) => e.user_id);

  const dataset = await prisma.user.findMany({
    where: { id: { in: fetchUserId } },
  });

  const imageMap = new Map(dataset.map((u) => [u.id, u.profilePicUrl]));
  const usernamesMap = new Map(dataset.map((u) => [u.id, u.username]));

  const personalizedThinks = thinks.map((e) => ({
    ...e,
    username: usernamesMap.get(e.user_id),
    userImageUrl: imageMap.get(e.user_id),
  }));

  res.status(200).json({
    message: "Explore fetched successfully",
    personalizedThinks,
    isEnd,
  });
});

export const following = catchAsync(async (req: Request, res: Response) => {
  // 🔒 Auth required — personal feed
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  let { skip }: { skip: number } = req.body;
  if (!skip) skip = 0;

  const LIMIT = 5;

  const followRows = await prisma.follow.findMany({
    where: { follower_id: userId },
    select: { following_id: true },
  });

  if (!followRows.length) {
    return res.status(200).json({
      message: "Not following anyone yet",
      personalizedThinks: [],
      isEnd: true,
    });
  }

  const followingIds = followRows.map((f) => f.following_id);

  const thinksRaw = await Think.find({ user_id: { $in: followingIds } })
    .sort({ _id: -1 })
    .lean()
    .skip(skip)
    .limit(LIMIT + 1);

  const isEnd = thinksRaw.length <= LIMIT;
  const thinks = thinksRaw.slice(0, LIMIT);

  const fetchUserIds = thinks.map((e) => e.user_id);

  const dataset = await prisma.user.findMany({
    where: { id: { in: fetchUserIds } },
  });

  const usernamesMap = new Map(dataset.map((u) => [u.id, u.username]));
  const imageMap = new Map(dataset.map((u) => [u.id, u.profilePicUrl]));

  const personalizedThinks = thinks.map((e) => ({
    ...e,
    username: usernamesMap.get(e.user_id),
    userImageUrl: imageMap.get(e.user_id), // ✅ was missing in your original
  }));

  res.status(200).json({
    message: "Following feed fetched successfully",
    personalizedThinks,
    isEnd,
  });
});

export const getNews = catchAsync(async (req: Request, res: Response) => {
  let { skip }: { skip: number } = req.body;
  if (!skip) skip = 0;

  const LIMIT = 3;

  const thinksRaw = await Think.find({ user_id: "news2" })
    .sort({ _id: -1 })
    .lean()
    .skip(skip)
    .limit(LIMIT + 1);

  const isEnd = thinksRaw.length <= LIMIT;
  const thinks = thinksRaw.slice(0, LIMIT);

  res.status(200).json({
    message: "News fetched successfully",
    personalizedThinks: thinks,
    isEnd,
  });
});
