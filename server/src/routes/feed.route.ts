import express from "express";
import { explore } from "../controllers/feed.controller.js";

const router = express.Router();

router.post("/explore", explore);

export default router;
