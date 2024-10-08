import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full py-5 px-2 md:p-8 bg-secondary text-white">
      <div className="container mx-auto md:flex md:justify-between gap-1 items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">123 Library Street, TW 55555</p>
          <div className="w-full flex justify-between md:justify-evenly mt-5 md:mt-0">
            <p className="text-sm hover:text-text_primary font-semibold underline cursor-pointer">
              Return Policy
            </p>
            <p className="text-sm hover:text-text_primary font-semibold underline cursor-pointer">
              Late Fees
            </p>
            <p className="text-sm hover:text-text_primary font-semibold underline cursor-pointer">
              Library Card Conditions
            </p>
          </div>
        </div>
        <div className="min-w-44 mt-5 md:mt-0 h-full flex justify-between md:justify-evenly items-center">
          <p className="text-sm">Socials</p>
          <FaYoutube
            className="px-1 cursor-pointer hover:bg-white hover:text-secondary"
            size="1.5rem"
          />
          <FaTwitter
            className="px-1 cursor-pointer hover:bg-white hover:text-secondary"
            size="1.5rem"
          />
          <FaFacebook
            className="px-1 cursor-pointer hover:bg-white hover:text-secondary"
            size="1.5rem"
          />
          <FaInstagram
            className="px-1 cursor-pointer hover:bg-white hover:text-secondary"
            size="1.5rem"
          />
        </div>
      </div>
    </div>
  );
}
