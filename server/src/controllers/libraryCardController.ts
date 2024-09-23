import { Request, Response } from "express";
import {
  findLibraryCard,
  registerLibraryCard,
} from "../services/libraryCardService";
import { ILibraryCard } from "../models/LibraryCard";
import { LibraryCardDoesNotExistError } from "../utils/libraryErrors";

async function getLibraryCard(req: Request, res: Response) {
  const { cardId } = req.params;

  try {
    const libraryCard = await findLibraryCard(cardId);
    res
      .status(200)
      .json({ message: "retrieve the user card", data: libraryCard });
  } catch (error) {
    if (error instanceof LibraryCardDoesNotExistError) {
      res
        .status(404)
        .json({ message: "The specified library card does not exist" });
    } else {
      res.status(500).json({
        message: "Unable to retrieve the library card",
        error,
      });
    }
  }
}

async function createLibraryCard(req: Request, res: Response) {
  const card: ILibraryCard = req.body;

  try {
    const libraryCard = await registerLibraryCard(card);
    res
      .status(201)
      .json({ message: "Generated library card for user", data: libraryCard });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to create library card at this time", error });
  }
}

export default { getLibraryCard, createLibraryCard };
