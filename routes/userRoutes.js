import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { updateUserController } from "../controller/userController.js";

//ROUTER OBJECT CREATE
const router = express.Router();

// ROUTES CREATE
// GET USERS || GET

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUserController);

export default router;
