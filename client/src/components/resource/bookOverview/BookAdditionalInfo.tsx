import { Book } from "../../../models/Book";

interface BookAdditionalInfoProps {
  book: Book;
}

export default function BookAdditionalInfo({ book }: BookAdditionalInfoProps) {
  return (
    <div className="w-full h-fit mt-4 p-4 rounded-xl bg-bg_secondary shadow-custom">
      <h4>Additional Information: {book.title}</h4>
      <div className="w-full h-4/5 flex flex-col md:flex-row md:justify-between gap-4 items-center">
        <div className="h-full md:w-1/4 flex flex-col justify-center items-center">
          <h6 className="text-center">Publish By:</h6>
          <p className="text-center">{book.publisher}</p>
        </div>
        <div className="h-full md:w-1/4 flex flex-col justify-center items-center">
          <h6 className="text-center">Published On:</h6>
          <p className="text-center">
            {new Date(book.publicationDate).toDateString()}
          </p>
        </div>
        <div className="h-full md:w-1/4 flex flex-col justify-center items-center">
          <h6 className="text-center">ISBN:</h6>
          <p className="text-center">{book.barcode}</p>
        </div>
        <div className="h-full md:w-1/4 flex flex-col justify-center items-center">
          <h6 className="text-center">Number of Pages:</h6>
          <p className="text-center">{book.pages}</p>
        </div>
      </div>
    </div>
  );
}
