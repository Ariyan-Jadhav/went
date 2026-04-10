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
  updateUser,
} from "../controllers/profile.controller.js";

const router = express.Router();

router.post("/", createProfile);
router.get("/me", getProfile);
router.put("/me", updateProfile);
router.put("/me/user", updateUser);
router.put("/me/movie", pinMovie);
router.put("/me/track", pinTrack);
router.put("/me/album", pinAlbum);
router.put("/me/artist", pinArtist);

router.get("/random", getRandomUsers);
router.get("/:username", getProfileByUsername);

export default router;
