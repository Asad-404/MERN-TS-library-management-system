import { Book } from "../../../models/Book";
import BookHistoryItem from "./bookHistory/BookHistoryItem";

interface BookHistoryProps {
  book: Book;
}

export default function BookHistory({ book }: BookHistoryProps) {
  return (
    <div className="w-full h-fit overflow-hidden bg-bg_secondary p-4 mt-4 rounded-xl shadow-custom">
      <h2>Loan History</h2>
      <div className="w-full h-52 overflow-y-scroll pt-4">
        {book.records.map((record) => {
          return <BookHistoryItem record={record} />;
        })}
      </div>
    </div>
  );
}
