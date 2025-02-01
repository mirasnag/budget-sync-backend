import { NextFunction, Request, Response } from "express";

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.log(req.path, req.method);
  next();
}
