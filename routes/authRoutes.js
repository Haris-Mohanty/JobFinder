import express from "express";
import { loginController, registerController } from "../controller/authController.js";
import rateLimit from 'express-rate-limit';

//IP LIMITER
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

//ROUTER OBJECT
const router = express.Router();

//****** ROUTES CREATE ******
router.post('/register',limiter, registerController); //Register(POST)
router.post("/login",limiter, loginController); //Login(POST)



export default router;
