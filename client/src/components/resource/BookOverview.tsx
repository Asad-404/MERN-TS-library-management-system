import { useAppSelector } from "../../store/hooks";
import BookInfo from "../common/BookInfo";
import BookAdditionalInfo from "./bookOverview/BookAdditionalInfo";
import BookHistory from "./bookOverview/BookHistory";
import BookSubjects from "./bookOverview/BookSubjects";

export default function BookOverview() {
  const bookState = useAppSelector((state) => state.book);
  const user = useAppSelector((state) => state.auth.loggedInUser);
  return (
    <div className="w-full h-fit">
      {bookState.currentBook && !bookState.loading && (
        <>
          <BookInfo book={bookState.currentBook} />
          <BookSubjects subjects={bookState.currentBook.subjects} />
          <BookAdditionalInfo book={bookState.currentBook} />
          {user?.type === "EMPLOYEE" && (
            <BookHistory book={bookState.currentBook} />
          )}
        </>
      )}
    </div>
  );
}
