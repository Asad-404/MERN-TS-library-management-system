import { Loan } from "./Loan";
import { User } from "./User";

export type Book = {
  id: string;
  barcode: string;
  cover: string;
  title: string;
  authors: string[];
  description: string;
  subjects: string[];
  publicationDate: Date;
  publisher: string;
  pages: number;
  genre: string;
  records: Loan[];
};

export type CheckoutBookPayload = {
  book: Book;
  libraryCard: string;
  employee: User;
};

export type CheckInBookPayload = {
  book: Book;
  employee: User;
};
