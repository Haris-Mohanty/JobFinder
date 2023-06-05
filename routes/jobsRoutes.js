import express from "express";
import userAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// ROUTES
// CREATE JOBS || POST
router.post("/create-job", userAuth);

export default router;
