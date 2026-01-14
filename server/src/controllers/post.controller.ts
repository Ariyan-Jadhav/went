import { Response, Request } from "express";
import { getAuth } from "@clerk/express";
import { Post } from "../models/post.model.js";
import { AppError, catchAsync } from "../middleware/error.middleware.js";
import { uploadmedia, deleteMediafromCloudinary } from "../utils/cloudinary.js";
import { promises as fs } from "fs";

export const createPost = catchAsync(async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);
  if (!isAuthenticated) throw new AppError("User not authenticated", 401);
  if (!userId) throw new AppError("User not found", 401);

  const { caption } = req.body;

  const files = req.files as Express.Multer.File[];
  if (!files || files.length === 0)
    throw new AppError("Add atleast one file", 403);
  if (files.length > 2) throw new AppError("cannot add more than 2 files", 400);

  try {
    const uploadPromises = files.map((file) => {
      return uploadmedia(file.path, "went/posts");
    });
    const uploadResults = await Promise.all(uploadPromises);

    const imageUrl = uploadResults.map((result) => ({
      url: result.secure_url,
      publicId: result.public_id,
    }));

    const post = await Post.create({
      user_id: userId,
      imageUrl: imageUrl,
      caption: caption,
      likesCount: 0,
      commentsCount: 0,
    });

    await Promise.all(files.map((file) => fs.unlink(file.path)));

    res.status(201).json({ message: post });
  } catch (error) {
    if (files)
      await Promise.all(
        files.map((file) => fs.unlink(file.path).catch(console.error))
      );
    throw new AppError(`Could not create post : ${error}`, 401);
  }
});

export const updatePostCaption = catchAsync(
  async (req: Request, res: Response) => {
    const { isAuthenticated, userId } = getAuth(req);
    if (!isAuthenticated) throw new AppError("User not authenticated", 401);
    if (!userId) throw new AppError("User not found", 401);

    const { caption, post_id } = req.body as {
      caption: string;
      post_id: string;
    };

    if (!caption) throw new AppError("Could not find the updated caption", 400);
    if (!post_id) throw new AppError("Could not find the post", 400);

    const postForUpdate = await Post.findById(post_id);
    if (postForUpdate?.user_id !== userId) {
      throw new AppError("You can only edit your own posts", 403);
    }

    if (caption) {
      const post = await Post.findByIdAndUpdate(
        post_id,
        { caption: caption },
        { new: true }
      );

      if (!post) throw new AppError("Could not change the caption", 400);
      await post.save();
      res.status(200).json({ message: "caption changed" });
    } else {
      throw new AppError("Fill the credentials", 400);
    }
  }
);

export const deleteSinglePost = catchAsync(
  async (req: Request, res: Response) => {
    const { isAuthenticated, userId } = getAuth(req);
    if (!isAuthenticated) throw new AppError("User not authenticated", 401);
    if (!userId) throw new AppError("User not found", 401);

    const { image_id, post_id } = req.body;

    if (image_id) {
      try {
        const post = await Post.findById(post_id);
        if (post?.user_id !== userId) {
          throw new AppError("You can only edit your own posts", 403);
        }

        deleteMediafromCloudinary(image_id);

        // await Post.findByIdAndUpdate{image_id, {imageUrl}}
      } catch (error) {
        throw new AppError("Could not delete post", 400);
      }
    }
    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  }
);
