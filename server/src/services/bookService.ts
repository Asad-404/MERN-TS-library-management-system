import BookDao, { IBookModel } from "../daos/BookDao";
import { IBook } from "../models/Book";
import { BookDoesNotExistError } from "../utils/libraryErrors";

export async function findAllBooks(): Promise<IBookModel[]> {
  return await BookDao.find();
}

export async function modifyBook(book: IBookModel): Promise<IBookModel> {
  try {
    let updatedBook = await BookDao.findOneAndUpdate(
      { barcode: book.barcode },
      book,
      {
        new: true,
      }
    );
    if (updatedBook) {
      return book;
    } else {
      throw new BookDoesNotExistError(
        "The book you are trying to modify does not exist"
      );
    }
  } catch (error) {
    throw error;
  }
}

export async function registerBook(book: IBook): Promise<IBookModel> {
  const saveBook = new BookDao(book);
  return await saveBook.save();
}

export async function removeBook(barcode: string): Promise<string> {
  try {
    let book = await BookDao.findOneAndDelete({ barcode });
    if (book) return "Book Deleted Successfully";
    throw new BookDoesNotExistError(
      "The book you are trying to delete does not exist"
    );
  } catch (error) {
    throw error;
  }
}
