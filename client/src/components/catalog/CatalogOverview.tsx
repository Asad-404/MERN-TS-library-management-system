import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchAllBooks } from "../../store/reducers/book";
import {
  generateRandomGenres,
  getRandomBookByGenre,
} from "../../utils/catalogUtils";
import CatalogOverviewSection from "./catalogOverview/CatalogOverviewSection";

export default function CatalogOverview() {
  const dispatch = useAppDispatch();
  const bookState = useAppSelector((state) => state.book);

  const [genres, setGenres] = useState<string[]>(generateRandomGenres);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);
  return (
    <>
      {bookState.books.length > 0 && !bookState.loading ? (
        <div className="catalog-overview w-full h-fit">
          <h2>
            Welcome to our library, we currently have{" "}
            {bookState.books && bookState.books.length} books.
          </h2>
          <h4>
            Browse our selected books below, or search for something using the
            top navigation bar.
          </h4>
          {genres.map((genre) => (
            <CatalogOverviewSection
              books={getRandomBookByGenre(genre, bookState.books)}
              label={genre}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
