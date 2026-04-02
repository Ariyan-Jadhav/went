import express from "express";
import { toggleThinkLike } from "../controllers/like.controller.js";

const router = express.Router();

router.post("/think", toggleThinkLike);

export default router;
