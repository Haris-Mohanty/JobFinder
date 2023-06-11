import express from "express";
import { loginController, registerController } from "../controller/authController.js";
import rateLimit from 'express-rate-limit';

//IP LIMITER


//ROUTER OBJECT
const router = express.Router();

//****** ROUTES CREATE ******
router.post('/register', registerController); //Register(POST)
router.post("/login", loginController); //Login(POST)


// EXPORT
export default router;
