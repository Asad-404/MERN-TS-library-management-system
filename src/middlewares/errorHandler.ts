import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
};

export default errorHandler;
