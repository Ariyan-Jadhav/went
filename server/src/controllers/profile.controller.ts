// zodiac signs
// attractive birthdate drop (like microsoft copilot)

// import axios from "axios";
import prisma from "../../lib/prisma.js";
import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { Response, Request } from "express";
import { getAuth } from "@clerk/express";

export const createProfile = catchAsync(async (req: Request, res: Response) => {
  const { bio, gender, zodiac, birthday, film, profession } = req.body;
  if (!bio || !gender || !birthday)
    throw new AppError("Please fill all the credentials", 401);

  const { userId, isAuthenticated } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const userExists = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!userExists) {
    throw new AppError(
      `User not found in database. Please complete signup first. ${userId}`,
      404
    );
  }

  const profile = await prisma.profile.create({
    data: {
      user_id: userId,
      bio: bio,
      gender: gender,
      zodiac: zodiac,
      birthday: birthday,
      film: film,
      profession: profession,
    },
  });
  res.json(profile);
});

export const getProfile = catchAsync(async (req: Request, res: Response) => {
  const { userId, isAuthenticated } = getAuth(req);

  if (!isAuthenticated) throw new AppError("User not authenticated", 401);

  if (!userId) throw new AppError("User not found", 401);

  const profile = await prisma.profile.findUnique({
    where: { user_id: userId },
    include: { user: true },
  });

  if (!profile) throw new AppError("user not found", 401);
  res.json(profile);
});

export const getProfilebyusername = catchAsync(
  async (req: Request, res: Response) => {
    const { username }: any = req.params;
    const { userId, isAuthenticated } = getAuth(req);

    if (!isAuthenticated) throw new AppError("User not authenticated", 401);

    if (!userId) throw new AppError("User not found", 401);

    const profile = await prisma.user.findUnique({
      where: { username },
      include: { Profile: true },
    });

    // const publicProfile = {
    //   id: user.id,
    //   username: user.username,
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   profilePicUrl: user.profilePicUrl,
    //   profile: user.profile,
    // };

    if (!profile) throw new AppError("user not found", 401);
    res.json(profile);
  }
);

export const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const { bio, gender, birthday, zodiac, film, profession } = req.body;
  if (!bio || !gender || !birthday)
    throw new AppError("Please fill all the credentials", 401);

  const { userId, isAuthenticated } = getAuth(req);

  if (!isAuthenticated) throw new AppError("User not authenticated", 401);

  if (!userId) throw new AppError("User not found", 401);

  const profile = await prisma.profile.upsert({
    where: { user_id: userId },
    update: { bio, gender, birthday, zodiac },
    create: {
      user_id: userId,
      bio,
      gender,
      birthday,
      zodiac,
      film,
      profession,
    },
  });
  res.json(profile);
});
