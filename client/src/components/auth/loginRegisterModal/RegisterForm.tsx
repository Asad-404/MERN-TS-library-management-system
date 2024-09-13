import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { MouseEvent, useEffect, useRef } from "react";
import {
  registerUser,
  resetRegisterSuccess,
} from "../../../store/reducers/auth";

interface RegisterFormProps {
  toggleLogin: () => void;
}

export default function RegisterForm({ toggleLogin }: RegisterFormProps) {
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();

  const firstRef = useRef<HTMLInputElement>(null);
  const lastRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleRegisterUser = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      firstRef &&
      firstRef.current &&
      lastRef &&
      lastRef.current &&
      emailRef &&
      emailRef.current &&
      passwordRef &&
      passwordRef.current
    ) {
      dispatch(
        registerUser({
          type: "PATRON",
          firstName: firstRef.current.value,
          lastName: lastRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetRegisterSuccess());
    };
  }, []);
  return (
    <form className="w-full h-full flex flex-col items-center justify-start p-4 md:p-8">
      <h2>Enter your information</h2>
      {authState.error ? (
        <p className="mb-4 text-error">There was an error</p>
      ) : (
        <></>
      )}
      <div className="w-full md:flex md:justify-between md:items-center md:pb-4">
        <div className="w-full pb-4 md:pb-0 md:w-[45%]">
          <h6>First Name</h6>
          <input
            className="w-full h-10 text-xl p-1.5 placeholder:text-text_secondary focus:outline-none"
            type="text"
            name="first"
            placeholder="first"
            required
            ref={firstRef}
          />
        </div>
        <div className="w-full pb-4 md:pb-0 md:w-[45%]">
          <h6>Last Name</h6>
          <input
            className="w-full h-10 text-xl p-1.5 placeholder:text-text_secondary focus:outline-none"
            type="last"
            name="last"
            placeholder="last"
            required
            ref={lastRef}
          />
        </div>
      </div>
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
        onClick={handleRegisterUser}
      >
        Register
      </button>
      {authState.registerSuccess ? (
        <p className="text-base md:text-xl">
          Registered Successfully.
          <span
            className="text-secondary cursor-pointer ml-1 hover:underline"
            onClick={toggleLogin}
          >
            Login here
          </span>
        </p>
      ) : (
        <></>
      )}
    </form>
  );
}
