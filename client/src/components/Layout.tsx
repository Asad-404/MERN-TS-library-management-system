import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import LoginRegisterModal from "./auth/LoginRegisterModal";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import LibraryCardModal from "./libraryCard/LibraryCardModal";
import LoanBookModal from "./catalog/LoanBookModal";

export default function Layout() {
  const setting = useAppSelector((state) => state.setting);
  return (
    <div className="w-full h-fit relative">
      {setting.displayLoginModal && <LoginRegisterModal />}
      {setting.displayLibraryCard && <LibraryCardModal />}
      {setting.displayLoan && <LoanBookModal />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
