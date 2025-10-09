// authRoutes.js

import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Auth Routes
router.post("/register", registerUser);      // Register User
router.post("/login", loginUser);           // Login User
router.get("/profile", protect, getUserProfile); // Get User Profile

export default router;

