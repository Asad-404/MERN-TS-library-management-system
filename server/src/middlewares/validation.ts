import Joi, { ObjectSchema } from "joi";
import { NextFunction, Response, Request } from "express";

import { IUser } from "../models/User";

export function validateSchema(schema: ObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      res.status(442).json({
        message: "Object validation failed, please provide a valid object",
      });
    }
  };
}

export const Schemas = {
  user: {
    create: Joi.object<IUser>({
      type: Joi.string().valid("ADMIN", "EMPLOYEE", "PATRON").required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
    login: Joi.object<{ email: string; password: string }>({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  },
};
