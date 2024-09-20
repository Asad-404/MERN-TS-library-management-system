import { useNavigate } from "react-router-dom";
import { Book } from "../../../models/Book";
import { useAppSelector } from "../../../store/hooks";
import BookCarousel from "./catalogOverviewSection/BookCarousel";

interface CatalogOverviewSectionProps {
  books: Book[];
  label: string;
}
export default function CatalogOverviewSection({
  books,
  label,
}: CatalogOverviewSectionProps) {
  const navigate = useNavigate();
  const bookState = useAppSelector((state) => state.book);

  const handleViewMore = () => {
    navigate(`catalog?genre=${label}&subject=${label}`);
  };
  return (
    <div className="w-full h-[500px]">
      <div className="h-[10%] flex justify-between items-end px-3">
        <h4>{label}</h4>
        <p
          className="hover:underline hover:cursor-pointer"
          onClick={handleViewMore}
        >
          View more...
        </p>
      </div>
      {books.length > 0 && !bookState.loading && <BookCarousel books={books} />}
    </div>
  );
}
