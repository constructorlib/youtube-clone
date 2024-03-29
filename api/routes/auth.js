import express from "express";
import { signup, signin } from "../controllers/auth.js";

const router = express.Router();

// Create a user
router.post("/signup", signup);
// Sign In
router.post("/signin", signin);

// Google OAUTH
router.post("/google");

export default router;
