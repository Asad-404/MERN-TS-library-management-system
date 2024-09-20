import { useState } from "react";
import { Book } from "../../../../models/Book";
import BookCard from "./bookCarousel/BookCard";

interface BookCarouselProps {
  books: Book[];
}

export default function BookCarousel({ books }: BookCarouselProps) {
  const [order, setOrder] = useState<Book[]>(books);

  const moveLeft = () => {
    const item = order[0];
    const reordered = order.slice(1, order.length);
    reordered.push(item);
    setOrder(reordered);
  };

  const moveRight = () => {
    const item = order[order.length - 1];
    let reordered = order.slice(0, order.length - 1);
    reordered = [item, ...reordered];
    setOrder(reordered);
  };
  return (
    <div className="w-full h-[425px] bg-bg_secondary shadow-custom flex justify-center items-center p-4 overflow-hidden flex-wrap gap-4 relative">
      <div
        className="h-10 w-10 absolute top-1/2 left-2.5 flex justify-center items-center select-none text-2xl hover:cursor-pointer hover:bg-[rgba(122,121,120,0.3)] hover:rounded-full"
        onClick={moveLeft}
      >
        {"<"}
      </div>
      {order.map((item) => (
        <BookCard book={item} key={item.barcode} />
      ))}
      <div
        className="h-10 w-10 absolute top-1/2 right-2.5 flex justify-center items-center select-none text-2xl hover:cursor-pointer hover:bg-[rgba(122,121,120,0.3)] hover:rounded-full"
        onClick={moveRight}
      >
        {">"}
      </div>
    </div>
  );
}
