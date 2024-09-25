import { Book } from "../models/Book";

export const mapAuthorsToString = (book: Book) => {
  let authors = "";

  for (const author of book.authors) {
    authors += author;
    authors += ", ";
  }

  return authors.slice(0, authors.length - 2);
};

/*

export function determineLoanModalContent(book:Book){
  if(book.records.length === 0 || book.records[0].status === 'AVAILABLE'){
    return <BookCheckout />
  }
  
  return <BookCheckIn />
}

*/
