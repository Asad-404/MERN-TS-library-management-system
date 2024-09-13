import { useRef, MouseEvent } from "react";
import { loginUser } from "../../../store/reducers/auth";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

interface LoginFormProps {
  toggleRegister: () => void;
}

export default function LoginForm({ toggleRegister }: LoginFormProps) {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailRef && emailRef.current && passwordRef && passwordRef.current) {
      dispatch(
        loginUser({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  return (
    <form className="w-full h-full flex flex-col items-center justify-start p-4 md:p-8">
      <h2>Please Login</h2>
      {auth.error ? (
        <p className="mb-4 text-error">Username or password incorrect</p>
      ) : (
        <></>
      )}
      <div className="w-full mb-4">
        <h6>Email</h6>
        <input
          className="w-full h-10 text-xl p-1.5 placeholder:text-text_secondary focus:outline-none"
          type="email"
          name="email"
          placeholder="email"
          required
          ref={emailRef}
        />
      </div>
      <div className="w-full mb-4">
        <h6>Password</h6>
        <input
          className="w-full h-10 text-xl p-1.5 placeholder:text-text_secondary focus:outline-none"
          type="password"
          name="password"
          placeholder="password"
          required
          ref={passwordRef}
        />
      </div>
      <button
        className="w-full h-10 border font-semibold border-transparent bg-secondary rounded-md text-white text-xl my-4 hover:cursor-pointer hover:bg-bg_primary hover:text-secondary hover:shadow-custom hover:border-2 hover:border-secondary"
        onClick={handleLogin}
      >
        Login
      </button>
      <p className="text-base md:text-xl">
        Don't have an account?
        <span
          className="text-secondary cursor-pointer ml-1 hover:underline"
          onClick={toggleRegister}
        >
          Create one here.
        </span>
      </p>
    </form>
  );
}
