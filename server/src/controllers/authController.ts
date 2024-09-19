import { Request, Response } from "express";

import { IUser } from "../models/User";
import { IUserModel } from "../daos/UserDao";
import { login, register } from "../services/userService";
import { InvalidUsernameOrPasswordError } from "../utils/libraryErrors";

async function handleRegister(req: Request, res: Response) {
  const user: IUser = req.body;

  try {
    const registeredUser = await register(user);
    res.status(201).json({
      message: "User successfully registered",
      data: registeredUser,
    });
  } catch (error: any) {
    if (error.message.includes("E11000 duplicate key error collection:")) {
      res.status(409).json({
        message: "User with email already exists",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "Unable to register user at this time",
        error: error.message,
      });
    }
  }
}

async function handleLogin(req: Request, res: Response) {
  const credentials = req.body;
  try {
    const loggedIn: IUserModel = await login(credentials);

    res.status(200).json({
      message: "User logged in successfully",
      data: loggedIn,
    });
  } catch (error: any) {
    if (error instanceof InvalidUsernameOrPasswordError) {
      res.status(401).json({
        message: "Unable to register user at this time",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "Unable to login user at this time",
        error: error.message,
      });
    }
  }
}

export default { handleRegister, handleLogin };
