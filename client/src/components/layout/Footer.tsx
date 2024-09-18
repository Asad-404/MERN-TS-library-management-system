import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-20 flex justify-between gap-1 px-2 md:p-8 items-center bg-secondary text-white">
      <div className="w-full flex justify-between items-center">
        <p className="text-sm">123 Library Street, TW 55555</p>
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
      <div className="min-w-44 h-full flex justify-evenly items-center">
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
  );
}
