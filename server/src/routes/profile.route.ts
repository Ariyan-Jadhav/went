import express from "express";
import { requireAuth } from "@clerk/express";
import {
  createProfile,
  getProfile,
  getProfileByUsername,
  updateProfile,
  pinMovie,
  pinTrack,
  pinAlbum,
  pinArtist,
  getRandomUsers,
} from "../controllers/profile.controller.js";

const router = express.Router();

// ✅ Move /random ABOVE /:username
router.post("/", requireAuth(), createProfile);
router.get("/me", requireAuth(), getProfile);
router.put("/me", requireAuth(), updateProfile);
router.put("/me/movie", requireAuth(), pinMovie);
router.put("/me/track", requireAuth(), pinTrack);
router.put("/me/album", requireAuth(), pinAlbum);
router.put("/me/artist", requireAuth(), pinArtist);

router.get("/random", requireAuth(), getRandomUsers);
router.get("/:username", requireAuth(), getProfileByUsername);

export default router;
