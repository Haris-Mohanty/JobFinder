import express from "express";
import { loginController, registerController } from "../controller/authController.js";
import rateLimit from 'express-rate-limit';

//IP LIMITER
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

//routes

/**
 * @swagger
 * components:
 *  schema:
 *   User:
 *    type:Object
 *    required:
 *     - name
 *     - lastName
 *     - email
 *     - password
 *     - location
 *    properties:
 *     id:
 *      type: string
 *      description: The Auto-generated id of user collection
 *     name:
 *      type: string
 *      description: User Name
 *     lastName:
 *      type: string
 *      description: User last Name 
 *     email:
 *      type: string
 *      description: User Email Address
 *     password:
 *      type: string
 *      description: User Password should be Greater than 6 Character
 *     location:
 *      type: string
 *      description: User location City or Country
 * 	  example:
 *      id: HGYJ4578GYHJUH58
 *      name: John
 *      lastName: Doe
 *      email: jhonedoe@gmail.com
 *      password: test@123
 *      location: Mumbai
 */



//ROUTER OBJECT
const router = express.Router();

//****** ROUTES CREATE ******
router.post('/register',limiter, registerController); //Register(POST)
router.post("/login",limiter, loginController); //Login(POST)



export default router;
