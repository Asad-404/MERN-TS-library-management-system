import Modal from "../common/Modal";
import { useEffect, useState } from "react";
import { setDisplayLoginModal } from "../../store/reducers/settings";
import LoginForm from "./loginRegisterModal/LoginForm";
import RegisterForm from "./loginRegisterModal/RegisterForm";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export default function LoginRegisterModal() {
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const closeModal = () => {
    dispatch(setDisplayLoginModal(false));
  };

  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    if (authState.loggedInUser) {
      closeModal();
    }
    return () => {
      if (authState.loggedInUser) {
        localStorage.setItem("userId", authState.loggedInUser.id);
      }
    };
  }, [authState.loggedInUser]);

  return (
    <Modal
      content={
        isLogin ? (
          <LoginForm toggleRegister={toggleIsLogin} />
        ) : (
          <RegisterForm toggleLogin={toggleIsLogin} />
        )
      }
      toggleModal={closeModal}
    />
  );
}
