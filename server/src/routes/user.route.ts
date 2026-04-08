import express from "express";
import { SignUpUsers, verifyUser } from "../api/register.webhook.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.post("/user", SignUpUsers);
router.post("/profile/me/verify", requireAuth(), verifyUser);

export default router;
