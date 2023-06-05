import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { createJobController, getAllJobsController } from "../controller/jobsController.js";

const router = express.Router();

// ROUTES
// CREATE JOBS || POST
router.post("/create-job", userAuth, createJobController);

// GET JOBS || GET
router.get("/get-jobs", userAuth, getAllJobsController);

export default router;
