import { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { checkInBook, setCurrentBook } from "../../store/reducers/book";
import { setDisplayLoan } from "../../store/reducers/settings";

export default function BookCheckIn() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.loggedInUser);
  const book = useAppSelector((state) => state.book.currentBook);

  const checkIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (book && user) {
      dispatch(
        checkInBook({
          book,
          employee: user,
        })
      );
      dispatch(setDisplayLoan(false));
      dispatch(setCurrentBook(undefined));
    }
  };
  return (
    <div className="w-full h-fit flex justify-center items-center p-4 mb-8">
      {book && user && (
        <form className="w-full h-full flex flex-col items-center justify-start">
          <h3>Check in Book Titled: {book.title}</h3>
          <h4>Check In Employee Id:</h4>
          <input
            className="w-4/5 h-9 text-2xl overflow-hidden text-ellipsis mb-2"
            value={user.id}
            type="text"
            disabled
          />
          <button
            className="w-4/5 h-10 text-2xl mt-2 text-white rounded-xl border-none bg-secondary cursor-pointer hover:border-2 hover:border-solid hover:border-secondary hover:bg-bg_secondary hover:text-secondary"
            onClick={checkIn}
            type="button"
          >
            Check In Book
          </button>
        </form>
      )}
    </div>
  );
}
