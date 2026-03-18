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
} from "../controllers/profile.controller.js";

const router = express.Router();

// ─── PROFILE CRUD ─────────────────────────────────────────────────────────────
router.post("/", requireAuth(), createProfile);
router.get("/me", requireAuth(), getProfile);
router.put("/me", requireAuth(), updateProfile);
router.get("/:username", requireAuth(), getProfileByUsername);

// ─── PINNED MEDIA (Spotify + OMDB) ───────────────────────────────────────────
router.put("/me/movie", requireAuth(), pinMovie);
router.put("/me/track", requireAuth(), pinTrack);
router.put("/me/album", requireAuth(), pinAlbum);
router.put("/me/artist", requireAuth(), pinArtist);

export default router;
