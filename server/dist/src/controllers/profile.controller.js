import prisma from "../../lib/prisma.js";
import { AppError } from "../middleware/error.middleware.js";
import { catchAsync } from "../middleware/error.middleware.js";
import { getAuth } from "@clerk/express";
export const createProfile = catchAsync(async (req, res) => {
    const { bio, gender, profession, location, hobby, birthday } = req.body;
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const userExists = await prisma.user.findUnique({
        where: { id: userId },
    });
    if (!userExists) {
        throw new AppError(`User not found in database. Please complete signup first. ${userId}`, 404);
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
export const getRandomUsers = catchAsync(async (req, res) => {
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const users = await prisma.$queryRaw `
    SELECT id, username, "firstName", "lastName", "profilePicUrl"
    FROM users
    WHERE id != ${userId}
    ORDER BY RANDOM()
    LIMIT 4
  `;
    const userIds = users.map((u) => u.id);
    const profiles = await prisma.profile.findMany({
        where: { user_id: { in: userIds } },
        select: { user_id: true, profession: true, bio: true },
    });
    const profileMap = new Map(profiles.map((p) => [p.user_id, p]));
    const result = users.map((u) => ({
        ...u,
        Profile: profileMap.get(u.id) ?? null,
    }));
    res.json({ users: result });
});
export const getProfile = catchAsync(async (req, res) => {
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
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
    if (!profile)
        throw new AppError("Profile not found", 404);
    res.json(profile);
});
export const getProfileByUsername = catchAsync(async (req, res) => {
    const { username } = req.params;
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    if (!username)
        throw new AppError("Username is required", 400);
    const user = await prisma.user.findUnique({
        where: { username },
        include: {
            likes: true,
            saved_post: true,
            followers: {
                include: {
                    follower: {
                        select: {
                            id: true,
                            username: true,
                            profilePicUrl: true,
                        },
                    },
                },
            },
            following: {
                include: {
                    following: {
                        select: {
                            id: true,
                            username: true,
                            profilePicUrl: true,
                        },
                    },
                },
            },
            _count: {
                select: {
                    followers: true,
                    following: true,
                },
            },
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
    if (!user)
        throw new AppError("User not found", 404);
    // 🔥 optional: clean response (much better)
    const formatted = {
        ...user,
        followersCount: user._count.followers,
        followingCount: user._count.following,
        followers: user.followers.map((f) => f.follower),
        following: user.following.map((f) => f.following),
    };
    res.json(formatted);
});
export const updateProfile = catchAsync(async (req, res) => {
    const { bio, gender, profession, location, hobby, birthday } = req.body;
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const updateData = {};
    if (bio !== undefined)
        updateData.bio = bio;
    if (gender !== undefined)
        updateData.gender = gender;
    if (profession !== undefined)
        updateData.profession = profession;
    if (location !== undefined)
        updateData.location = location;
    if (hobby !== undefined)
        updateData.hobby = hobby;
    if (birthday !== undefined)
        updateData.birthday = new Date(birthday);
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
export const pinMovie = catchAsync(async (req, res) => {
    const { title, year, type, poster } = req.body;
    if (!title || !year || !type)
        throw new AppError("title, year, and type are required", 400);
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const profile = await prisma.profile.findUnique({
        where: { user_id: userId },
    });
    if (!profile)
        throw new AppError("Profile not found. Create one first.", 404);
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
export const pinTrack = catchAsync(async (req, res) => {
    const { name, artist, image } = req.body;
    if (!name || !artist)
        throw new AppError("name and artist are required", 400);
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const profile = await prisma.profile.findUnique({
        where: { user_id: userId },
    });
    if (!profile)
        throw new AppError("Profile not found. Create one first.", 404);
    const track = await prisma.profileTrack.upsert({
        where: { profile_id: profile.id },
        update: { name, artist, image: image ?? null },
        create: { profile_id: profile.id, name, artist, image: image ?? null },
    });
    res.json(track);
});
export const pinAlbum = catchAsync(async (req, res) => {
    const { name, image } = req.body;
    if (!name)
        throw new AppError("Album name is required", 400);
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const profile = await prisma.profile.findUnique({
        where: { user_id: userId },
    });
    if (!profile)
        throw new AppError("Profile not found. Create one first.", 404);
    const album = await prisma.profileAlbum.upsert({
        where: { profile_id: profile.id },
        update: { name, image: image ?? null },
        create: { profile_id: profile.id, name, image: image ?? null },
    });
    res.json(album);
});
export const pinArtist = catchAsync(async (req, res) => {
    const { name, image } = req.body;
    if (!name)
        throw new AppError("Artist name is required", 400);
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    const profile = await prisma.profile.findUnique({
        where: { user_id: userId },
    });
    if (!profile)
        throw new AppError("Profile not found. Create one first.", 404);
    const artist = await prisma.profileArtist.upsert({
        where: { profile_id: profile.id },
        update: { name, image: image ?? null },
        create: { profile_id: profile.id, name, image: image ?? null },
    });
    res.json(artist);
});
export const updateUser = catchAsync(async (req, res) => {
    const { firstName, lastName, username, profilePicUrl } = req.body;
    const { userId, isAuthenticated } = getAuth(req);
    if (!isAuthenticated)
        throw new AppError("User not authenticated", 401);
    if (!userId)
        throw new AppError("User not found", 401);
    // Build update object with only provided fields
    const updateData = {};
    if (firstName !== undefined)
        updateData.firstName = firstName;
    if (lastName !== undefined)
        updateData.lastName = lastName;
    if (username !== undefined)
        updateData.username = username;
    if (profilePicUrl !== undefined)
        updateData.profilePicUrl = profilePicUrl;
    // Check username uniqueness if being updated
    if (username) {
        const taken = await prisma.user.findFirst({
            where: { username, NOT: { id: userId } },
        });
        if (taken)
            throw new AppError("Username is already taken.", 400);
    }
    const user = await prisma.user.update({
        where: { id: userId },
        data: updateData,
    });
    res.json(user);
});
//# sourceMappingURL=profile.controller.js.map