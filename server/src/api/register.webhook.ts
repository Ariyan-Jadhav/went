import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/clerk-sdk-node";
import prisma from "../../lib/prisma.js";
import { AppError } from "../middleware/error.middleware.js";
import { Request, type Response } from "express";

console.log(1);

export const SignUpUsers = async (req: Request, res: Response) => {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET)
    throw new AppError("plz add a WEBHOOK_SECRET from Clerk", 404);

  console.log(2);

  const svix_id = req.headers["svix-id"] as string;
  const svix_timestamp = req.headers["svix-timestamp"] as string;
  const svix_signature = req.headers["svix-signature"] as string;
  console.log(3);

  if (!svix_id || !svix_signature || !svix_timestamp) {
    return res.status(400).json({
      error: "Error occured - no svix headers",
    });
  }
  const body = req.body.toString("utf8");
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;
  console.log(4);

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;

    console.log(5);
  } catch (error) {
    console.error("Error verifying webhook", error);
    return res.status(400).json({ error: "Error Occured" });
  }

  const { id } = evt.data;
  const eventType = evt.type;
  console.log(6);

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  if (eventType === "user.created") {
    console.log("Event data:", JSON.stringify(evt.data, null, 2));
    try {
      const {
        email_addresses,
        primary_email_address_id,
        image_url,
        first_name,
        last_name,
        username,
      } = evt.data;
      console.log(7);

      if (!id) {
        console.error("No user ID found");
        return res.status(400).json({ error: "no user id found" });
      }

      const primaryEmail = email_addresses.find(
        (email) => email.id === primary_email_address_id
      );
      if (!primaryEmail) {
        console.error("No primary Email found");
        // return res.status(404).json({ error: "no email found" });
      }
      console.log(8);
      const newUser = await prisma.user.create({
        data: {
          id: id,
          firstName: first_name || "",
          lastName: last_name || "",
          username: username || "",
          email: primaryEmail?.email_address || "",
          profilePicUrl: image_url || null,
        },
      });
      console.log(" New user created:", newUser);
    } catch (error) {
      console.error("Error creating user in database", error);
      return res.status(500).json({ error: "Error creating user" });
    }
  }
  return res.status(200).json({ message: "Webhook received success" });
};
