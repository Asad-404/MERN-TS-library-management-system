import { useNavigate } from "react-router-dom";
import { Book } from "../../models/Book";
import { mapAuthorsToString } from "../../utils/bookUtils";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const navigate = useNavigate();
  const displayBook = () => {
    navigate(`/resource/${book.barcode}`);
  };
  return (
    <div
      className="book-card h-[400px] w-[300px] bg-bg_secondary rounded-xl p-2 flex flex-col justify-center items-center shadow-custom cursor-pointer"
      onClick={displayBook}
    >
      <img
        className="book-card-cover h-[45%]"
        src={book.cover}
        alt="book cover"
      />
      <div className="book-card-info h-1/2 w-full m-0 overflow-hidden">
        <h1 className="book-card-title w-full whitespace-nowrap overflow-hidden text-ellipsis text-3xl">
          {book.title}
        </h1>
        <h3 className="book-card-author w-full whitespace-nowrap overflow-hidden text-ellipsis text-xl">
          {mapAuthorsToString(book)}
        </h3>
        <p className="book-card-description w-full max-h-[70%] text-xs flex flex-col overflow-hidden line-clamp-6">
          {book.description}
        </p>
      </div>
    </div>
  );
}

/*
.book-card-loan-button {
  width: 90%;
  height: 2.5rem;
  border: none;
  border-radius: 12px;
}

.available {
  background-color: var(--secondary);
}

.unavailable {
  background-color: #CB4C4E;
}

.checkout:hover {
  cursor: pointer;
  background-color: var(--background-secondary);
  border: 2px solid var(--secondary);
}

.checkin:hover {
  cursor: pointer;
  background-color: var(--background-secondary);
  border: 2px solid #CB4C4E;
}
*/
