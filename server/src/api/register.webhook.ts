import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/clerk-sdk-node";
import prisma from "../../lib/prisma.js";
import { clerkClient } from "@clerk/express";
import { AppError } from "../middleware/error.middleware.js";
import { Request, type Response } from "express";

export const SignUpUsers = async (req: Request, res: Response) => {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET)
    throw new AppError("plz add a WEBHOOK_SECRET from Clerk", 404);

  const svix_id = req.headers["svix-id"] as string;
  const svix_timestamp = req.headers["svix-timestamp"] as string;
  const svix_signature = req.headers["svix-signature"] as string;

  if (!svix_id || !svix_signature || !svix_timestamp) {
    return res.status(400).json({ error: "Error occured - no svix headers" });
  }

  if (!Buffer.isBuffer(req.body)) {
    return res
      .status(400)
      .json({ error: "Raw body not available - check body parser setup" });
  }

  const body = req.body.toString("utf8");
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (error) {
    console.error("Error verifying webhook", error);
    return res.status(400).json({ error: "Error Occured" });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    try {
      const { email_addresses, primary_email_address_id } = evt.data;

      if (!id) {
        console.error("No user ID found");
        return res.status(400).json({ error: "no user id found" });
      }

      const primaryEmail = email_addresses.find(
        (email) => email.id === primary_email_address_id,
      );

      // ✅ Guard: don't proceed without an email
      if (!primaryEmail) {
        console.error("No primary email found in webhook payload");
        return res.status(400).json({ error: "no primary email found" });
      }

      const username = primaryEmail?.email_address.replace("@gmail.com", "");

      const existingUser = await prisma.user.findUnique({
        where: { id },
      });

      if (existingUser) {
        console.log("User already exists, skipping...");
        return res.status(200).json({ message: "Webhook received success" });
      }

      await prisma.user.create({
        data: {
          id,
          email: primaryEmail?.email_address || "",
          firstName: "",
          lastName: "",
          username: username,
          profilePicUrl: "",
          isBot: false,
        },
      });

      const existingProfile = await prisma.profile.findUnique({
        where: { user_id: id },
      });

      if (!existingProfile) {
        await prisma.profile.create({
          data: { user_id: id },
        });
      }

      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: { verified: false },
      });
    } catch (error) {
      console.error("Error creating user in database", error);
      return res.status(500).json({ error: "Error creating user" });
    }
  }

  return res.status(200).json({ message: "Webhook received success" });
};

export const verifyUser = async (req: Request, res: Response) => {
  const userId = (req as any).auth?.userId;
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: { verified: true },
  });

  return res.status(200).json({ message: true });
};
