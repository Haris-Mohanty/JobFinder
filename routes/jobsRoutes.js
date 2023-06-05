import express from "express";
import userAuth from "../middleware/authMiddleware";

const router = express.Router();

// ROUTES
// CREATE JOBS || POST
router.post('/create-job', userAuth)


export default router;
