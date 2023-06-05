import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { createJobController } from "../controller/jobsController.js";

const router = express.Router();

// ROUTES
// CREATE JOBS || POST
router.post("/create-job", userAuth, createJobController);

export default router;
