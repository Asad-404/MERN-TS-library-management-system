import BookOfTheWeek from "../components/home/BookOfTheWeek";
import ContactUs from "../components/home/ContactUs";
import LibraryCard from "../components/home/LibraryCard";
import LibraryHours from "../components/home/LibraryHours";
import UpcomingEvents from "../components/home/UpcomingEvents";

export default function HomePage() {
  return (
    <div className="container mx-auto p-1 md:p-4 flex flex-col gap-4 md:flex-row justify-between items-start bg-bg_primary shadow-custom">
      <div className="w-full md:w-[75%] h-full flex flex-col justify-start items-start">
        <BookOfTheWeek />
        <UpcomingEvents />
        <LibraryCard />
      </div>
      <div className="w-full md:w-[25%] flex flex-col justify-start items-start">
        <LibraryHours />
        <ContactUs />
      </div>
    </div>
  );
}
