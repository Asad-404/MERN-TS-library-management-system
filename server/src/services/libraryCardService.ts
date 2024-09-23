import LibraryCardDao, { ILibraryCardModel } from "../daos/LibraryCardDao";
import { ILibraryCard } from "../models/LibraryCard";
import { LibraryCardDoesNotExistError } from "../utils/libraryErrors";

export async function registerLibraryCard(
  card: ILibraryCard
): Promise<ILibraryCardModel> {
  try {
    const newCard = new LibraryCardDao(card);
    return await newCard.save();
  } catch (error) {
    const res = await LibraryCardDao.findOne({ user: card.user }).populate(
      "user"
    );

    if (res) return res;
    throw error;
  }
}

export async function findLibraryCard(
  libraryCardId: string
): Promise<ILibraryCardModel> {
  try {
    const res = await LibraryCardDao.findOne({ _id: libraryCardId }).populate(
      "user"
    );
    if (res) return res;
    throw new LibraryCardDoesNotExistError(
      "The library card specified does not exist"
    );
  } catch (error) {
    throw error;
  }
}
