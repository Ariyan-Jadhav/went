import express from "express";
import { requireAuth } from "@clerk/express";
import {
  createProfile,
  getProfile,
  getProfilebyusername,
  updateProfile,
} from "../controllers/profile.controller.js";

const router = express.Router();

router.post("/createprofile", createProfile);
router.get("/me", requireAuth(), getProfile);
router.get("/:username", getProfilebyusername);
router.put("/me/updateprofile", updateProfile);

export default router;
