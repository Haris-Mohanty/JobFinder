import express from "express";
import { loginController, registerController } from "../controller/authController.js";

//ROUTER OBJECT
const router = express.Router();

//ROUTES CREATE
router.post('/register', registerController); //Register(POST)
router.post("/login", loginController);


// EXPORT
export default router;
