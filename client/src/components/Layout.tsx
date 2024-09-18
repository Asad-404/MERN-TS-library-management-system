import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import LoginRegisterModal from "./auth/LoginRegisterModal";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

export default function Layout() {
  const setting = useAppSelector((state) => state.setting);
  return (
    <div className="w-full h-fit relative">
      {setting.displayLoginModal && <LoginRegisterModal />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
