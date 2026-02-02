import express from "express";
import {
  createThink,
  updateThink,
  deleteThink,
} from "../controllers/think.controller.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.post("/create", upload.array("images", 10), createThink);
router.post("/update", updateThink);
router.post("/delete", deleteThink);

export default router;
