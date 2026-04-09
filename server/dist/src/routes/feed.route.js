import express from "express";
import { explore, following, getNews } from "../controllers/feed.controller.js";
import { requireAuth } from "@clerk/express";
const router = express.Router();
router.post("/explore", explore);
router.post("/following", requireAuth(), following);
router.post("/getnews", getNews);
export default router;
//# sourceMappingURL=feed.route.js.map