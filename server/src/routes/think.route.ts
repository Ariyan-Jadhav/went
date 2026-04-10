import express from "express";
import {
  createThink,
  updateThink,
  deleteThink,
  reThink,
  getThinksByUser,
  getUserRepostThink,
} from "../controllers/think.controller.js";
import { upload } from "../utils/multer.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.post("/create", upload.array("images", 10), createThink);
router.post("/update", updateThink);
router.post("/delete", deleteThink);
router.post("/rethink", requireAuth(), reThink);
router.post("/userthink", requireAuth(), getThinksByUser);
router.post("/profilerepost", requireAuth(), getUserRepostThink);

export default router;
