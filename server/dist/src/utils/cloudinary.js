//never use catchAsync in utils, cause when u warp a function(like uploadResponse) inside catchAsync, it expects it to be a route handler, but ou're using it as a utility function that only needs a file parameter.
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { AppError } from "../middleware/error.middleware.js";
dotenv.config({});
cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});
export const uploadmedia = async (filePath, folder) => {
    try {
        const uploadResponse = await cloudinary.uploader.upload(filePath, {
            folder: folder,
            resource_type: "auto",
            transformation: [
                { width: 1080, height: 1080, crop: "limit" },
                { quality: "auto:good" },
                { fetch_format: "auto" },
            ],
        });
        console.log("Media uploaded:", uploadResponse.secure_url);
        return uploadResponse;
    }
    catch (error) {
        console.error(error);
        throw new AppError("Could not upload the file", 401);
    }
};
export const deleteMediafromCloudinary = async (publicId) => {
    try {
        const uploadResponse = await cloudinary.uploader.destroy(publicId);
        if (uploadResponse.result === "ok")
            console.log("Media deleted: ", publicId);
        else {
            console.warn("Delete result: ", uploadResponse);
            throw new AppError("failed to delete the file", 401);
        }
    }
    catch (error) {
        console.error("Delete failed", error);
        throw new AppError("Could not delete the file", 401);
    }
};
//# sourceMappingURL=cloudinary.js.map