import { Book } from "../models/Book";

export const generateRandomGenres = () => {
  const choices = [
    "Non-Fiction",
    "Childrens",
    "Fantasy",
    "Biography",
    "Romance",
    "Science Fiction",
    "Young Adult",
  ];
  const chosen: string[] = [];

  while (chosen.length !== 5) {
    const num = Math.floor(Math.random() * 7);
    if (!chosen.includes(choices[num])) chosen.push(choices[num]);
  }

  return chosen;
};

export const getRandomBookByGenre = (genre: string, books: Book[]): Book[] => {
  const randomBooks: Book[] = [];
  const filteredBooks = books.filter((book) => book.genre === genre);

  if (filteredBooks.length < 10) return filteredBooks;

  while (randomBooks.length !== 10) {
    const idx = Math.floor(Math.random() * filteredBooks.length);
    if (
      !randomBooks.some(
        (item) => item["barcode"] === filteredBooks[idx].barcode
      )
    ) {
      randomBooks.push(filteredBooks[idx]);
    }
  }

  return randomBooks;
};
