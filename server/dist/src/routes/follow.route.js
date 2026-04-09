import express from "express";
import { toggleFollow } from "../controllers/follow.controller.js";
import { requireAuth } from "@clerk/express";
const router = express.Router();
// POST /follow - Toggle follow/unfollow a user
router.post("/", requireAuth(), toggleFollow);
export default router;
//# sourceMappingURL=follow.route.js.map