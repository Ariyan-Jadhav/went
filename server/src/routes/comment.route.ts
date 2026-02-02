import express from "express";
import {
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", createComment);
router.post("/delete", deleteComment);
router.post("/update", updateComment);

export default router;
