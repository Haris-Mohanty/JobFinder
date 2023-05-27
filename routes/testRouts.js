import express from "express";
import { testPostController } from "../controller/testController.js";

//router object create
const router = express.Router();

// routes create
router.post("/test-post",testPostController);

//exports
export default router;
