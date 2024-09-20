import BookInfo from "./bookOfTheWeek/BookInfo";

export default function BookOfTheWeek() {
  return (
    <div className="w-full h-fit rounded-xl p-4 shadow-custom bg-bg_secondary">
      <h1>Book of the week:</h1>
      <BookInfo
        book={{
          id: "12345",
          barcode: "12345",
          cover: "https://placehold.co/320x400",
          authors: ["Asad", "Anjar"],
          title: "Book title 101",
          description:
            "This book can be seen as a sequel to the book: System Design Interview An Insider's Guide. It covers a different set of system design interview questions and solutions. Although reading Volume 1 is helpful, it is not required. This book should be accessible to readers who have a basic understanding of distributed systems.",
          pages: 400,
          subjects: ["Java", "JavaScript"],
          publicationDate: new Date("2020-01-05"),
          publisher: "My Publisher",
          genre: "Programming",
          records: [],
        }}
      />
      <BookInfo
        book={{
          id: "12345",
          barcode: "12345",
          cover: "https://placehold.co/320x400",
          authors: ["Asad", "Anjar"],
          title: "Book title 101",
          description:
            "This book can be seen as a sequel to the book: System Design Interview An Insider's Guide. It covers a different set of system design interview questions and solutions. Although reading Volume 1 is helpful, it is not required. This book should be accessible to readers who have a basic understanding of distributed systems.",
          pages: 400,
          subjects: ["Java", "JavaScript"],
          publicationDate: new Date("2020-01-05"),
          publisher: "My Publisher",
          genre: "Programming",
          records: [],
        }}
      />
    </div>
  );
}
