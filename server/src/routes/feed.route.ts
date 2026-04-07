import express from "express";
import { explore, following, getNews } from "../controllers/feed.controller.js";

const router = express.Router();

router.post("/explore", explore);
router.post("/following", following);
router.post("/getnews", getNews);

export default router;
