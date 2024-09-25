import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setDisplayLoan } from "../../store/reducers/settings";
import Modal from "../common/Modal";
import BookCheckIn from "./BookCheckIn";
import BookCheckout from "./BookCheckout";

export default function LoanBookModal() {
  const dispatch = useAppDispatch();
  const currentBook = useAppSelector((state) => state.book.currentBook);

  const closeModal = () => {
    dispatch(setDisplayLoan(false));
  };
  return (
    <Modal
      content={
        currentBook ? (
          <>
            {currentBook.records.length === 0 ||
            currentBook.records[0].status === "AVAILABLE" ? (
              <BookCheckout />
            ) : (
              <BookCheckIn />
            )}
          </>
        ) : (
          <></>
        )
      }
      toggleModal={closeModal}
    />
  );
}
