import { Request, Response } from "express";
import {
  findAllUsers,
  findUserById,
  modifyUser,
  removeUser,
} from "../services/userService";
import { UserDoesNotExistError } from "../utils/libraryErrors";

async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await findAllUsers();
    res.status(200).json({
      message: "Users retrieve successfully",
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Unable to retrieve users at this time",
      error: error.message,
    });
  }
}

async function getUserById(req: Request, res: Response) {
  const userId = req.params.userId;
  try {
    const user = await findUserById(userId);
    res.status(200).json({ message: "User found successfully", data: user });
  } catch (error: any) {
    if (error instanceof UserDoesNotExistError) {
      res.status(404).json({ message: "Requested user does not exist" });
    } else {
      res
        .status(500)
        .json({ message: "Could not find user", error: error.message });
    }
  }
}

async function updateUser(req: Request, res: Response) {
  const user = req.body;
  try {
    const updatedUser = await modifyUser(user);
    res
      .status(202)
      .json({ message: "User updated successfully", data: updatedUser });
  } catch (error: any) {
    if (error instanceof UserDoesNotExistError) {
      res.status(404).json({ message: "Requested user does not exist" });
    } else {
      res.status(500).json({
        message: "Unable to update user currently",
        error: error.message,
      });
    }
  }
}

async function deleteUser(req: Request, res: Response) {
  const userId: string = req.params.userId;
  try {
    await removeUser(userId);
    res.status(202).json({ message: "User deleted successfully" });
  } catch (error: any) {
    if (error instanceof UserDoesNotExistError) {
      res.status(404).json({ message: "Requested user does not exist" });
    } else {
      res.status(500).json({
        message: "Unable to delete user at this time",
        error: error.message,
      });
    }
  }
}

export default { getAllUsers, getUserById, updateUser, deleteUser };
