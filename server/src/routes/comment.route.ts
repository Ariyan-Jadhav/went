import express from "express";
import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", createComment);
router.post("/delete", deleteComment);
router.post("/update", updateComment);
router.post("/get", getComments);

export default router;
