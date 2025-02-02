import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config/config";
import { UserModel } from "../user/user-model";

interface AuthenticatedRequest extends Request {
  user?: { _id: string };
}

export const requireAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: "Authorization token is required" });
    return;
  }

  const token = authorization.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, config.jwt_secret) as JwtPayload;

    if (!decodedToken._id) {
      res.status(401).json({ error: "Invalid token structure" });
      return;
    }

    const user = await UserModel.findById(decodedToken._id).select("_id");

    if (!user) {
      res.status(401).json({ error: "User not found" });
      return;
    }

    req.user = { _id: user.toString() };

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json("Request is not authorized");
  }
};
