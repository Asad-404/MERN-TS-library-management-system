import { Request, Response } from "express";
import {
  findAllBooks,
  modifyBook,
  registerBook,
  removeBook,
} from "../services/bookService";
import { BookDoesNotExistError } from "../utils/libraryErrors";

async function getAllBooks(req: Request, res: Response) {
  try {
    let books = await findAllBooks();
    res.status(200).json({
      message: "Retrieved all books",
      count: books.length,
      data: books,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Unable to retrieve books at this time",
      error: error.message,
    });
  }
}

async function createBook(req: Request, res: Response) {
  let book = req.body;
  try {
    let saveBook = await registerBook(book);
    res
      .status(201)
      .json({ message: "Book created successfully", data: saveBook });
  } catch (error: any) {
    res.status(500).json({
      message: "Unable to save book at this time",
      error: error.message,
    });
  }
}

async function updateBook(req: Request, res: Response) {
  let book = req.body;

  try {
    let updatedBook = await modifyBook(book);
    res
      .status(200)
      .json({ message: "Book updated successfully", data: updatedBook });
  } catch (error: any) {
    if (error instanceof BookDoesNotExistError) {
      res.status(404).json({
        message: "Cannot update book that does not exist",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "Unable to update book at this time",
        error: error.message,
      });
    }
  }
}

async function deleteBook(req: Request, res: Response) {
  let { barcode } = req.params;
  try {
    let message = await removeBook(barcode);
    res.status(202).json({ message });
  } catch (error: any) {
    if (error instanceof BookDoesNotExistError) {
      res.status(404).json({
        message: "Cannot delete book that does not exist",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "Unable to delete book at this time",
        error: error.message,
      });
    }
  }
}

export default { getAllBooks, createBook, updateBook, deleteBook };
