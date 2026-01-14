import { Webhook } from "svix";
import prisma from "../../lib/prisma.js";
import { AppError } from "../middleware/error.middleware.js";
export const ClerkWebhookHandler = async (req, res) => {
    console.log("1");
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET)
        throw new AppError("plz add a WEBHOOK_SECRET from Clerk", 404);
    const svix_id = req.headers["svix-id"];
    const svix_timestamp = req.headers["svix-timestamp"];
    const svix_signature = req.headers["svix-signature"];
    console.log("2");
    if (!svix_id || !svix_signature || !svix_timestamp) {
        return res.status(400).json({
            error: "Error occured - no svix headers",
        });
    }
    console.log("3");
    const body = req.body.toString("utf8");
    const wh = new Webhook(WEBHOOK_SECRET);
    let evt;
    console.log("4");
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        });
    }
    catch (error) {
        console.error("Error verifying webhook", error);
        return res.status(400).json({ error: "Error Occured" });
    }
    console.log("5");
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
    console.log("Webhook body:", body);
    if (eventType === "user.created") {
        console.log("Event data:", JSON.stringify(evt.data, null, 2));
        try {
            const { email_addresses, primary_email_address_id, image_url, first_name, last_name, username, } = evt.data;
            if (!id) {
                console.error("No user ID found");
                return res.status(400).json({ error: "no user id found" });
            }
            console.log("6");
            const primaryEmail = email_addresses.find((email) => email.id === primary_email_address_id);
            if (!primaryEmail) {
                console.error("No primary Email found");
                return res.status(404).json({ error: "no email found" });
            }
            console.log("7");
            const newUser = await prisma.user.create({
                data: {
                    id: id,
                    firstName: first_name || "",
                    lastName: last_name || "",
                    username: username || "",
                    email: primaryEmail?.email_address,
                    profilePicUrl: image_url || null,
                },
            });
            console.log(" New user created:", newUser);
        }
        catch (error) {
            console.error("Error creating user in database", error);
            return res.status(500).json({ error: "Error creating user" });
        }
        console.log("8");
    }
    return res.status(200).json({ message: "Webhook received success" });
};
//# sourceMappingURL=register.webhook.js.map