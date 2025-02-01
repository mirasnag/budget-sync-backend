import { NextFunction, Request, Response } from "express";

// login
export const loginUser = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ mssg: "Login" });
};

// signup
export const singupUser = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ mssg: "Signup" });
};
