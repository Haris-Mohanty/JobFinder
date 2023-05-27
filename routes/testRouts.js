import express from "express";
import { testPostController } from "../controller/testController.js";

//router object create
const router = express.Router();

// routes create
router.post("/test",testPostController);

//exports
export default router;
