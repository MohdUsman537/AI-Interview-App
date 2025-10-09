// Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Import core modules and dependencies
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// app.use("/api/auth",authRoutes);
// app.use("/api/sessions",sessionRoutes);
// app.use("/api/questions",questionRoutes);

// app.use("/api/ai/generate-questions",protect,generateInterviewQuestions);
// app.use("/api/ai/generate-explanation",protect,generateConceptExplanation);



// Serve static files from "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
