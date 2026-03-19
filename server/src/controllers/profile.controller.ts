import prisma from "../../lib/prisma.js";
import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { Response, Request } from "express";
import { getAuth } from "@clerk/express";

export const createProfile = catchAsync(async (req: Request, res: Response) => {
  const { bio, gender, profession, location, hobby, birthday } = req.body;

  const { userId, isAuthenticated } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const userExists = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!userExists) {
    throw new AppError(
      `User not found in database. Please complete signup first. ${userId}`,
      404,
    );
  }

  const existingProfile = await prisma.profile.findUnique({
    where: { user_id: userId },
  });

  if (existingProfile) {
    throw new AppError("Profile already exists. Use update instead.", 400);
  }

  const profile = await prisma.profile.create({
    data: {
      user_id: userId,
      bio: bio ?? null,
      gender: gender ?? "not specified",
      profession: profession ?? "Berozgar",
      location: location ?? null,
      ...(hobby ? { hobby: Array.isArray(hobby) ? hobby : [hobby] } : {}),
      birthday: birthday ? new Date(birthday) : null,
    },
    include: {
      user: true,
      movies: true,
      tracks: true,
      albums: true,
      artists: true,
    },
  });

  res.status(201).json(profile);
});

export const getProfile = catchAsync(async (req: Request, res: Response) => {
  const { userId, isAuthenticated } = getAuth(req);

  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const profile = await prisma.profile.findUnique({
    where: { user_id: userId },
    include: {
      user: true,
      movies: true,
      tracks: true,
      albums: true,
      artists: true,
    },
  });

  if (!profile) throw new AppError("Profile not found", 404);

  res.json(profile);
});

export const getProfileByUsername = catchAsync(
  async (req: Request, res: Response) => {
    const { username } = req.params;
    const { userId, isAuthenticated } = getAuth(req);

    if (!isAuthenticated) throw new AppError("User not authenticated", 401);
    if (!userId) throw new AppError("User not found", 401);
    if (!username) throw new AppError("Username is required", 400);

    const user = await prisma.user.findUnique({
      where: { username },
      include: {
        Profile: {
          include: {
            movies: true,
            tracks: true,
            albums: true,
            artists: true,
          },
        },
      },
    });

    if (!user) throw new AppError("User not found", 404);

    res.json(user);
  },
);

export const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const { bio, gender, profession, location, hobby, birthday } = req.body;

  const { userId, isAuthenticated } = getAuth(req);

  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const updateData: any = {};
  if (bio !== undefined) updateData.bio = bio;
  if (gender !== undefined) updateData.gender = gender;
  if (profession !== undefined) updateData.profession = profession;
  if (location !== undefined) updateData.location = location;
  if (hobby !== undefined) updateData.hobby = hobby;
  if (birthday !== undefined) updateData.birthday = new Date(birthday);

  const profile = await prisma.profile.upsert({
    where: { user_id: userId },
    update: updateData,
    create: {
      user_id: userId,
      bio: bio ?? null,
      gender: gender ?? "not specified",
      profession: profession ?? "Berozgar",
      location: location ?? null,
      ...(hobby ? { hobby: Array.isArray(hobby) ? hobby : [hobby] } : {}),
      birthday: birthday ? new Date(birthday) : null,
    },
    include: {
      user: true,
      movies: true,
      tracks: true,
      albums: true,
      artists: true,
    },
  });

  res.json(profile);
});

export const pinMovie = catchAsync(async (req: Request, res: Response) => {
  const { title, year, type, poster } = req.body;

  if (!title || !year || !type)
    throw new AppError("title, year, and type are required", 400);

  const { userId, isAuthenticated } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const profile = await prisma.profile.findUnique({
    where: { user_id: userId },
  });
  if (!profile) throw new AppError("Profile not found. Create one first.", 404);

  const movie = await prisma.profileMovie.upsert({
    where: { profile_id: profile.id },
    update: { title, year, type, poster: poster ?? null },
    create: {
      profile_id: profile.id,
      title,
      year,
      type,
      poster: poster ?? null,
    },
  });

  res.json(movie);
});

export const pinTrack = catchAsync(async (req: Request, res: Response) => {
  const { name, artist, image } = req.body;

  if (!name || !artist) throw new AppError("name and artist are required", 400);

  const { userId, isAuthenticated } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const profile = await prisma.profile.findUnique({
    where: { user_id: userId },
  });
  if (!profile) throw new AppError("Profile not found. Create one first.", 404);

  const track = await prisma.profileTrack.upsert({
    where: { profile_id: profile.id },
    update: { name, artist, image: image ?? null },
    create: { profile_id: profile.id, name, artist, image: image ?? null },
  });

  res.json(track);
});

export const pinAlbum = catchAsync(async (req: Request, res: Response) => {
  const { name, image } = req.body;

  if (!name) throw new AppError("Album name is required", 400);

  const { userId, isAuthenticated } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const profile = await prisma.profile.findUnique({
    where: { user_id: userId },
  });
  if (!profile) throw new AppError("Profile not found. Create one first.", 404);

  const album = await prisma.profileAlbum.upsert({
    where: { profile_id: profile.id },
    update: { name, image: image ?? null },
    create: { profile_id: profile.id, name, image: image ?? null },
  });

  res.json(album);
});

export const pinArtist = catchAsync(async (req: Request, res: Response) => {
  const { name, image } = req.body;

  if (!name) throw new AppError("Artist name is required", 400);

  const { userId, isAuthenticated } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const profile = await prisma.profile.findUnique({
    where: { user_id: userId },
  });
  if (!profile) throw new AppError("Profile not found. Create one first.", 404);

  const artist = await prisma.profileArtist.upsert({
    where: { profile_id: profile.id },
    update: { name, image: image ?? null },
    create: { profile_id: profile.id, name, image: image ?? null },
  });

  res.json(artist);
});
