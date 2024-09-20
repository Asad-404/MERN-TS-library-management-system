import { MdAutoAwesome } from "react-icons/md";

export default function UpcomingEvents() {
  return (
    <div className="w-full h-fit rounded-xl p-4 shadow-custom bg-bg_secondary mt-4">
      <div className="w-full flex justify-evenly items-center">
        <MdAutoAwesome size="2.25rem" color="#3626A7" />
        <h2>Upcoming Events</h2>
        <MdAutoAwesome size="2.25rem" color="#3626A7" />
      </div>
      <h3>This Summer</h3>
      <h4>Tuesday's: 10:00 AM - Noon</h4>
      <ul className="list-inside list-disc pl-6">
        <li>Who: Children to 6th grade</li>
        <li>Activities: Logic Puzzles, Scratch Programming</li>
      </ul>
      <h4>Wednesday's: 10:00 AM - Noon</h4>
      <ul className="list-inside list-disc pl-6">
        <li>Who: Adult(18+)</li>
        <li>
          Activities: Craft and Sip - Come enjoy a nice beverage and craft
        </li>
      </ul>
      <h4>Thursday's: 10:00 AM - Noon</h4>
      <ul className="list-inside list-disc pl-6">
        <li>Who: Teen (7th to 12th grade)</li>
        <li>Activities: Web programming course - Learn the MERN Stack</li>
      </ul>
    </div>
  );
}
