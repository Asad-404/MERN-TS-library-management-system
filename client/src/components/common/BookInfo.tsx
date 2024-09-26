import { Book } from "../../models/Book";
import { mapAuthorsToString } from "../../utils/bookUtils";

interface BookInfoProps {
  book: Book;
}

export default function BookInfo({ book }: BookInfoProps) {
  return (
    <div className="w-full h-fit rounded-xl py-2 md:py-4">
      <div className="w-full md:flex md:justify-evenly md:items-start">
        <img className="w-[320px] mr-6" src={book.cover} alt="book cover" />
        <div>
          <h2>{book.title}</h2>
          <h3>{mapAuthorsToString(book)}</h3>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
}
