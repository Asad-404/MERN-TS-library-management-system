import bcrypt from "bcrypt";

import { IUser } from "../models/User";
import { appConfig } from "../config/appConfig";
import UserDao, { IUserModel } from "../daos/UserDao";
import {
  UnableToSaveUserError,
  InvalidUsernameOrPasswordError,
  UserDoesNotExistError,
} from "../utils/libraryErrors";

export async function register(user: IUser): Promise<IUserModel> {
  const ROUNDS = appConfig.rounds;
  try {
    const hashedPass = await bcrypt.hash(user.password, ROUNDS);
    const newUser = new UserDao({ ...user, password: hashedPass });
    return await newUser.save();
  } catch (error: any) {
    throw new UnableToSaveUserError(error.message);
  }
}

export async function login(credentials: {
  email: string;
  password: string;
}): Promise<IUserModel> {
  const { email, password } = credentials;
  try {
    const user = await UserDao.findOne({ email });
    if (!user) {
      throw new InvalidUsernameOrPasswordError("Invalid username or password");
    } else {
      const isValidPass: boolean = await bcrypt.compare(
        password,
        user.password
      );
      if (isValidPass) {
        return user;
      } else {
        throw new InvalidUsernameOrPasswordError(
          "Invalid username or password"
        );
      }
    }
  } catch (error: any) {
    throw error;
  }
}

export async function findAllUsers(): Promise<IUserModel[]> {
  try {
    const users = await UserDao.find();
    return users;
  } catch (error) {
    return [];
  }
}

export async function findUserById(userId: string): Promise<IUserModel> {
  try {
    const user = await UserDao.findById(userId);
    if (user) return user;
    throw new UserDoesNotExistError("User does not exist with this ID");
  } catch (error) {
    throw error;
  }
}

export async function modifyUser(user: IUserModel): Promise<IUserModel> {
  try {
    const id = await UserDao.findByIdAndUpdate(user.id, user, {
      new: true,
    });

    if (!id) {
      throw new UserDoesNotExistError("User does not exist with this ID");
    }

    return user;
  } catch (error) {
    throw error;
  }
}

export async function removeUser(userId: string): Promise<string> {
  try {
    let deleted = await UserDao.findByIdAndDelete(userId);
    if (!deleted) {
      throw new UserDoesNotExistError("User does not exist with this ID");
    }
    return "User deleted successfully";
  } catch (error) {
    throw error;
  }
}
