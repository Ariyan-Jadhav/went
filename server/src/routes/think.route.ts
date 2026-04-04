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

const router = express.Router();

router.post("/create", upload.array("images", 10), createThink);
router.post("/update", updateThink);
router.post("/delete", deleteThink);
router.post("/rethink", reThink);
router.post("/userthink", getThinksByUser);
router.post("/profilerepost", getUserRepostThink);

export default router;
