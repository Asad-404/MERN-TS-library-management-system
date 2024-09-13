import { useSelector } from "react-redux";
import { RootState } from "../store";
import LoginRegisterModal from "../components/auth/LoginRegisterModal";

export default function HomePage() {
  const displayLoginModal = useSelector(
    (state: RootState) => state.setting.displayLoginModal
  );
  return (
    <div className="page">
      Home Page
      {displayLoginModal ? <LoginRegisterModal /> : <></>}
    </div>
  );
}
