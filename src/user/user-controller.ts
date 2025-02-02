import { Request, Response } from "express";
import { UserModel } from "./user-model";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
import { getErrorMessage } from "../utils/error";

const createToken = (_id: string) => {
  return jwt.sign({ _id }, config.jwt_secret, { expiresIn: "3d" });
};

// login
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);

    // create a token
    const token = createToken(user._id as string);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

// signup
export const signupUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.signup(email, password);

    // create a token
    const token = createToken(user._id as string);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};
