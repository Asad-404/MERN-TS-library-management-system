import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { queryBooks } from "../../store/reducers/book";
import BookCard from "./BookCard";
import CatalogAdvancedSearch from "./catalogSearch/CatalogAdvancedSearch";
import CatalogSearchNavigator from "./catalogSearch/CatalogSearchNavigator";

export default function CatalogSearch() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const bookState = useAppSelector((state) => state.book);

  useEffect(() => {
    dispatch(queryBooks(location.search));
  }, [location.search]);

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center p-4">
      <div className="w-[98.75%] h-fit flex flex-col justify-center items-center mb-4">
        <CatalogAdvancedSearch />
      </div>
      {!bookState.loading ? (
        <>
          <h2>
            Displaying {bookState.pagination?.pageCount} books out of{" "}
            {bookState.pagination?.totalCount}
          </h2>
          <div className="w-full h-fit flex justify-center flex-wrap gap-4 mt-4">
            {bookState.books.map((book) => (
              <BookCard key={book.barcode} book={book} />
            ))}
          </div>
          <div className="w-full h-fit flex justify-center items-center">
            <CatalogSearchNavigator />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
