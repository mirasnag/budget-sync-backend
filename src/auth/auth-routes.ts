import express from "express";
import { loginUser, singupUser } from "./auth-controller";

const router = express.Router();

// login
router.post("/login", loginUser);

// signup
router.post("/signup", singupUser);

export default router;
