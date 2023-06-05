import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { createJob } from "../controller/jobsController.js";

const router = express.Router();

// ROUTES
// CREATE JOBS || POST
router.post("/create-job", userAuth, createJob);

export default router;
