import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import {
  createJobController,
  getAllJobsController,
} from "../controller/jobsController.js";

const router = express.Router();

// ROUTES
// CREATE JOBS || POST
router.post("/create-job", userAuth, createJobController);

// GET JOBS || GET
router.get("/get-job", userAuth, getAllJobsController);

// UPDATE JOBS || PUT || PATCH
router.patch("/update-job/:id", userAuth);

export default router;
