import { Book } from "../models/Book";
import { Pagination } from "../models/Pagination";

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

export const calculatePagination = (pagination: Pagination): string[] => {
  const pArr: string[] = [];

  if (pagination) {
    const total = pagination?.totalPages;
    const current = pagination?.currentPage;

    if (total <= 10) {
      for (let i = 1; i <= total; i++) {
        pArr.push(`${i}`);
      }
    } else if (total > 10 && current - 7 <= 0) {
      for (let i = 1; i <= 8; i++) {
        pArr.push(`${i}`);
      }

      pArr.push("...");

      for (let i = total - 1; i <= total; i++) {
        pArr.push(`${i}`);
      }
    } else if (total > 10 && total - 7 > 0 && total - current > 5) {
      for (let i = 1; i <= 2; i++) {
        pArr.push(`${i}`);
      }

      pArr.push("...");

      for (let i = current; i <= current + 4; i++) {
        pArr.push(`${i}`);
      }
      pArr.push("...");

      for (let i = total - 1; i <= total; i++) {
        pArr.push(`${i}`);
      }
    } else {
      // for (let i = 1; i <= 2; i++) {
      //   pArr.push(`${i}`);
      //   pArr.push(`...`);
      //   for (let i = total - 5; i <= total; i++) {
      //     pArr.push(`${i}`);
      //   }
      // }

      for (let i = 1; i <= 2; i++) {
        pArr.push(`${i}`);
      }

      pArr.push(`...`);

      for (let i = total - 5; i <= total; i++) {
        pArr.push(`${i}`);
      }
    }
  }

  return pArr;
};
