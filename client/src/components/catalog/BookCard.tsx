import { useNavigate } from "react-router-dom";
import { Book } from "../../models/Book";
import { mapAuthorsToString } from "../../utils/bookUtils";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MouseEvent, useState } from "react";
import { setCurrentBook } from "../../store/reducers/book";
import { setDisplayLoan } from "../../store/reducers/settings";
import clsx from "clsx";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.loggedInUser);

  const [available] = useState<boolean>(() => {
    if (book.records.length === 0) return true;
    return book.records[0].status === "AVAILABLE";
  });

  const handleLoan = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (user?.type === "EMPLOYEE") {
      dispatch(setCurrentBook(book));
      dispatch(setDisplayLoan(true));
    }
  };

  const displayBook = () => {
    navigate(`/resource/${book.barcode}`);
  };
  return (
    <div
      className="h-[400px] w-[300px] bg-bg_secondary rounded-xl p-2 flex flex-col justify-center items-center shadow-custom cursor-pointer"
      onClick={displayBook}
    >
      <img className="h-[45%]" src={book.cover} alt="book cover" />

      <div className="h-1/2 w-full m-0 overflow-hidden">
        <h1 className="w-full whitespace-nowrap overflow-hidden text-ellipsis text-3xl">
          {book.title}
        </h1>
        <h3 className="w-full whitespace-nowrap overflow-hidden text-ellipsis text-xl">
          {mapAuthorsToString(book)}
        </h3>
        <p className="text-xs text-ellipsis line-clamp-6">{book.description}</p>
      </div>

      <button
        className={clsx(
          "w-4/5 h-10 text-white border-none rounded-xl mb-2",
          { "bg-secondary": available },
          { "bg-error": !available },
          {
            "hover:text-secondary hover:cursor-pointer hover:bg-bg_secondary hover:border-2 hover:border-solid hover:border-secondary":
              user && user.type === "EMPLOYEE" && available,
          },
          {
            "hover:text-error hover:cursor-pointer hover:bg-bg_secondary hover:border-2 hover:border-solid hover:border-error":
              user && user.type === "EMPLOYEE" && !available,
          }
        )}
        onClick={handleLoan}
      >
        Status: {available ? "AVAILABLE" : "UNAVAILABLE"}
      </button>
    </div>
  );
}
