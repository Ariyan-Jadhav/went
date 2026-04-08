import express from "express";
import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "../controllers/comment.controller.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.post("/create", requireAuth(), createComment);
router.post("/delete", requireAuth(), deleteComment);
router.post("/update", requireAuth(), updateComment);
router.post("/get", getComments);

export default router;
