import BookDao, { IBookModel } from "../daos/BookDao";
import { IBook } from "../models/Book";
import { IPagination } from "../models/Pagination";
import { BookDoesNotExistError } from "../utils/libraryErrors";

export async function findAllBooks(): Promise<IBookModel[]> {
  return await BookDao.find();
}

export async function findBookById(id: string): Promise<IBookModel> {
  try {
    const book = await BookDao.findById(id);
    if (book) return book;
    throw new BookDoesNotExistError("The specified book does not exist");
  } catch (error) {
    throw error;
  }
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

export async function queryBooks(
  page: number,
  limit: number,
  title?: string,
  barcode?: string,
  description?: string,
  author?: string,
  subject?: string,
  genre?: string
): Promise<IPagination<IBookModel>> {
  const books: IBookModel[] = await BookDao.find();
  const filteredBooks: IBookModel[] = [];

  books.forEach((item) => {
    if (barcode) {
      if (
        item.barcode
          .toLocaleLowerCase()
          .includes(barcode.toLocaleLowerCase()) &&
        !filteredBooks.some((book) => book["barcode"] === item.barcode)
      ) {
        filteredBooks.push(item);
      }
    }

    if (title) {
      if (
        item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) &&
        !filteredBooks.some((book) => book["barcode"] === item.barcode)
      ) {
        filteredBooks.push(item);
      }
    }

    if (description) {
      if (
        item.description
          .toLocaleLowerCase()
          .includes(description.toLocaleLowerCase()) &&
        !filteredBooks.some((book) => book["barcode"] === item.barcode)
      ) {
        filteredBooks.push(item);
      }
    }

    if (author) {
      if (
        item.authors.some((a) =>
          a.toLocaleLowerCase().includes(author.toLocaleLowerCase())
        ) &&
        !filteredBooks.some((book) => book["barcode"] === item.barcode)
      ) {
        filteredBooks.push(item);
      }
    }

    if (subject) {
      if (
        item.subjects.some((s) =>
          s.toLocaleLowerCase().includes(subject.toLocaleLowerCase())
        ) &&
        !filteredBooks.some((book) => book["barcode"] === item.barcode)
      ) {
        filteredBooks.push(item);
      }
    }

    if (genre) {
      if (
        item.genre.toLocaleLowerCase() === genre.toLocaleLowerCase() &&
        !filteredBooks.some((book) => book["barcode"] === item.barcode)
      ) {
        filteredBooks.push(item);
      }
    }
  });

  return paginatedBooks(filteredBooks, page, limit);
}

export function paginatedBooks(
  books: IBookModel[],
  page: number,
  limit: number
): IPagination<IBookModel> {
  let pageBooks: IBookModel[] = [];
  const pages = Math.ceil(books.length / Number(limit));

  if (Number(page) === pages) {
    const startPoint = (Number(page) - 1) * Number(limit);
    pageBooks = books.slice(startPoint);
  } else {
    const startPoint = (Number(page) - 1) * Number(limit);
    const endPoint = startPoint + Number(limit);
    pageBooks = books.slice(startPoint, endPoint);
  }

  return {
    totalCount: books.length,
    currentPage: Number(page),
    totalPages: pages,
    limit: Number(limit),
    pageCount: pageBooks.length,
    items: pageBooks,
  };
}
