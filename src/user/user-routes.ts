import express from "express";
import { loginUser, signupUser } from "./user-controller";

const router = express.Router();

// login
router.post("/login", loginUser);

// signup
router.post("/signup", signupUser);

export default router;
