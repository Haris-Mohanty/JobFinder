import express from "express";
import userAuth from "../middleware/authMiddleware";

//ROUTER OBJECT CREATE
const router = express.Router();

// ROUTES CREATE
// GET USERS || GET

// UPDATE USER || PUT
router.put("/update-user", userAuth);

export default router;
