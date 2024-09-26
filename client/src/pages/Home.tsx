import BookOfTheWeek from "../components/home/BookOfTheWeek";
import ContactUs from "../components/home/ContactUs";
import LibraryCard from "../components/home/LibraryCard";
import LibraryHours from "../components/home/LibraryHours";
import UpcomingEvents from "../components/home/UpcomingEvents";

export default function HomePage() {
  return (
    <div className="container mx-auto py-2 md:py-4 px-2 md:px-0 flex flex-col gap-2 md:gap-4 md:flex-row justify-between items-start bg-bg_primary">
      <div className="w-full md:w-3/4 h-full flex flex-col justify-start items-start">
        <BookOfTheWeek />
        <UpcomingEvents />
        <LibraryCard />
      </div>
      <div className="w-full md:w-1/4 flex flex-col justify-start items-start">
        <LibraryHours />
        <ContactUs />
      </div>
    </div>
  );
}
