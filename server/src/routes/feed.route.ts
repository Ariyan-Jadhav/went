import express from "express";
import { explore, following } from "../controllers/feed.controller.js";

const router = express.Router();

router.post("/explore", explore);
router.post("/following", following);

export default router;
