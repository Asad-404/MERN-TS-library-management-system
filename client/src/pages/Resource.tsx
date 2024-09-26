import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { loadBookByBarcode } from "../store/reducers/book";
import BookOverview from "../components/resource/BookOverview";

export default function Resource() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { barcode } = useParams();

  const bookState = useAppSelector((state) => state.book);

  useEffect(() => {
    if (barcode) {
      dispatch(loadBookByBarcode(barcode));
    }

    if (bookState.error) navigate("/catalog");
  }, [bookState.error, barcode, navigate, dispatch]);
  return (
    <div className="container mx-auto py-2 md:py-4 px-2 md:px-0">
      <BookOverview />
    </div>
  );
}
