import { MouseEvent, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { checkoutBook, setCurrentBook } from "../../store/reducers/book";
import { setDisplayLoan } from "../../store/reducers/settings";

export default function BookCheckout() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.loggedInUser);
  const book = useAppSelector((state) => state.book.currentBook);

  const libraryCardRef = useRef<HTMLInputElement>(null);

  const checkout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (book && user && libraryCardRef && libraryCardRef.current) {
      dispatch(
        checkoutBook({
          book,
          employee: user,
          libraryCard: libraryCardRef.current.value,
        })
      );
    }
    dispatch(setCurrentBook(undefined));
    dispatch(setDisplayLoan(false));
  };

  return (
    <div className="w-full h-fit flex justify-center items-center p-4 mb-8">
      {book && user && (
        <form className="w-full h-full flex flex-col items-center justify-start">
          <h3>Loan Book Titled: {book.title}</h3>
          <h4>Enter Patrons Library Card:</h4>
          <input
            className="h-9 w-4/5 text-2xl overflow-hidden text-ellipsis mb-2"
            placeholder="Library Card ID"
            ref={libraryCardRef}
            type="text"
          />
          <h4>Checkout Employee ID:</h4>
          <input
            className="h-9 w-4/5 text-2xl overflow-hidden text-ellipsis mb-2"
            value={user.id}
            type="text"
            disabled
          />
          <button
            className="w-4/5 h-10 text-2xl mt-2 text-white rounded-xl border-none bg-secondary cursor-pointer hover:border-2 hover:border-solid hover:border-secondary hover:bg-bg_secondary hover:text-secondary"
            onClick={checkout}
            type="button"
          >
            Loan Book
          </button>
        </form>
      )}
    </div>
  );
}
