import express from "express";
import asyncHandler from 'express-async-handler';
const router = express.Router();
import { authUser } from "../controllers/userController.js";

router.route("/auth").post(authUser);

export default router;
