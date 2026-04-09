import express from "express";
import { toggleThinkLike } from "../controllers/like.controller.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.post("/think", requireAuth(), toggleThinkLike);

export default router;
