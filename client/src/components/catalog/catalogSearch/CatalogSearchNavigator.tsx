import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { calculatePagination } from "../../../utils/catalogUtils";

export default function CatalogSearchNavigator() {
  const navigate = useNavigate();
  const { search } = useLocation();

  const bookPagination = useAppSelector((state) => state.book.pagination);

  const navigatePrevious = () => {
    if (bookPagination && bookPagination.currentPage !== 1) {
      if (search.includes("&page=")) {
        const splitString = search.split("&page=");
        const newTerms =
          splitString[0] + `&page=${bookPagination.currentPage - 1}`;
        navigate(`/catalog${newTerms}`);
      } else {
        const newTerms = search + `&page=${bookPagination.currentPage - 1}`;
        navigate(`/catalog${newTerms}`);
      }
    }
  };

  const navigateToNumber = (pageNumber: string) => {
    if (search.includes("&page=")) {
      const splitString = search.split("&page=");
      const newTerms = splitString[0] + `&page=${pageNumber}`;
      navigate(`/catalog${newTerms}`);
    } else {
      const newTerms = search + `&page=${pageNumber}`;
      navigate(`/catalog${newTerms}`);
    }
  };

  const navigateNext = () => {
    if (
      bookPagination &&
      bookPagination.currentPage !== bookPagination.totalPages
    ) {
      if (search.includes("&page=")) {
        const splitString = search.split("&page=");
        const newTerms =
          splitString[0] + `&page=${bookPagination.currentPage + 1}`;
        navigate(`/catalog${newTerms}`);
      } else {
        const newTerms = search + `&page=${bookPagination.currentPage + 1}`;
        navigate(`/catalog${newTerms}`);
      }
    }
  };

  return (
    <div className="catalog-search-navigator flex justify-center items-center mt-8">
      <p
        className="cursor-pointer mx-2 hover:underline"
        onClick={navigatePrevious}
      >
        Prev
      </p>
      <div className="flex justify-center items-center h-fit">
        {bookPagination &&
          calculatePagination(bookPagination).map((num) => {
            if (num === `${bookPagination.currentPage}`) {
              return (
                <p
                  key={num}
                  className="flex items-center justify-center w-6 h-6 cursor-pointer mx-2 bg-[rgba(54,38,167,0.3)] rounded"
                >
                  {num}
                </p>
              );
            }
            return (
              <p
                key={num}
                className="flex items-center justify-center w-6 h-6 cursor-pointer mx-2 hover:bg-[rgba(54,38,167,0.3)] hover:rounded"
                onClick={() => navigateToNumber(num)}
              >
                {num}
              </p>
            );
          })}
      </div>
      <p className="cursor-pointer mx-2 hover:underline" onClick={navigateNext}>
        Next
      </p>
    </div>
  );
}
