import { catchAsync } from "./error.middleware.js";
import { getAuth, clerkClient } from "@clerk/express";
import { Request, Response, NextFunction } from "express";
import { AppError } from "./error.middleware.js";

export const requireVerified = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { isAuthenticated, userId } = getAuth(req);

    if (!isAuthenticated || !userId) {
      throw new AppError("User not authenticated", 401);
    }

    const user = await clerkClient.users.getUser(userId);
    const verified = user.publicMetadata?.verified;

    if (!verified) {
      throw new AppError("Account not verified", 403);
    }

    next();
  },
);
