import express from "express";
import {} from "../controllers/auth.js";

// Create a user
router.post("/signup", signup);
// Sign In
router.post("/signin");

// Google OAUTH
router.post("/google");

const router = express.Router();

export default router;
