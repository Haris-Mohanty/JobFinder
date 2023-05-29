import express from "express";
import { registerController } from "../controller/authController.js";

//ROUTER OBJECT
const router = express.Router();

//ROUTES CREATE
router.post("./register", registerController);

// EXPORT
export default router;
