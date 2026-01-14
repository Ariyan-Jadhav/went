import express from "express";
import { ClerkWebhookHandler } from "../api/register.webhook.js";
const router = express.Router();
// router.use(express.raw({ type: "application/json" }));
router.post("/user", ClerkWebhookHandler);
export default router;
//# sourceMappingURL=user.route.js.map