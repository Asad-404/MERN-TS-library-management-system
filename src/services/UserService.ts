import bcrypt from "bcrypt";

import { IUser } from "../models/user";
import { appConfig } from "../config/appConfig";
import UserDto, { IUserModel } from "../dtos/UserDto";
import {
  UnableToSaveUserError,
  InvalidUsernameOrPasswordError,
} from "../utils/LibraryErrors";

export async function register(user: IUser): Promise<IUserModel> {
  const ROUNDS = appConfig.rounds;
  try {
    const hashedPass = await bcrypt.hash(user.password, ROUNDS);
    const newUser = new UserDto({ ...user, password: hashedPass });
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
    const user = await UserDto.findOne({ email });
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
