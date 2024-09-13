import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import LoginRegisterModal from "./auth/LoginRegisterModal";
import { MdBook } from "react-icons/md";

export default function Layout() {
  const setting = useAppSelector((state) => state.setting);
  return (
    <div className="w-full h-fit relative">
      {setting.displayLoginModal && <LoginRegisterModal />}
      <h1>NAV BAR</h1>
      <MdBook size="3rem" color="red" className="cursor-pointer" />
      <Outlet />
      <h1>FOOTER</h1>
    </div>
  );
}
