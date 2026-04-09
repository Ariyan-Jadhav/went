import prisma from "../../lib/prisma.js";
import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { getAuth } from "@clerk/express";
export const searchUsers = catchAsync(async (req, res) => {
    const { isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    const q = req.query.q;
    if (!q || !q.trim())
        throw new AppError("Search query is required", 400);
    const users = await prisma.user.findMany({
        where: {
            username: { contains: q.trim(), mode: "insensitive" },
        },
        select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            profilePicUrl: true,
            isBot: true,
        },
        take: 10,
    });
    res.status(200).json({
        message: "Users fetched successfully",
        users,
    });
});
//# sourceMappingURL=search.controller.js.map