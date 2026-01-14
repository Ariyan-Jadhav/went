import express from "express";
import { SignUpUsers } from "../api/register.webhook.js";

const router = express.Router();

// router.use(express.raw({ type: "application/json" }));

router.post("/user", SignUpUsers);

export default router;
