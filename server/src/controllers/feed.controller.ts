import { Response, Request } from "express";
import { getAuth } from "@clerk/express";
import { AppError, catchAsync } from "../middleware/error.middleware.js";
import { Think } from "../models/think.model.js";
import { Comment } from "../models/comment.model.js";
import { BreathingBots } from "../models/bots.model.js";

export const explore = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  let { skip }: { skip: number } = req.body;

  if (!skip) skip = 0;

  const thinks = await Think.find({})
    .sort({ _id: -1 })
    .lean()
    .skip(skip)
    .limit(5);
  if (!thinks.length) throw new AppError("Cannot fetch thinks", 500);

  const fetchuserId = thinks.map((e) => e.user_id);

  const dataset = await BreathingBots.find({
    id: { $in: fetchuserId },
  }).lean();

  const usernamesMap = new Map(
    dataset.map((shrusthi) => [shrusthi.id, shrusthi.username]),
  );

  const personalizedThinks = thinks.map((e) => ({
    ...e,
    username: usernamesMap.get(e.user_id),
  }));

  res
    .status(200)
    .json({ message: "Explore fetched successfully", personalizedThinks });
});
