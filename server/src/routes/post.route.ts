import express from "express";
import {
  createPost,
  updatePostCaption,
  deleteSinglePost,
} from "../controllers/post.controller.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.post("/createpost", upload.array("images", 10), createPost);
router.post("/updatecaption", updatePostCaption);
router.post("/deletepost", deleteSinglePost);

export default router;
