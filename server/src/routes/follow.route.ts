import express from "express";
import { toggleFollow } from "../controllers/follow.controller.js";

const router = express.Router();

// POST /follow - Toggle follow/unfollow a user
router.post("/", toggleFollow);

export default router;
