import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function App() {
  const loggedInUser = useSelector(
    (state: RootState) => state.auth.loggedInUser
  );

  useEffect(() => {
    console.log("loggedInUser", loggedInUser);
  }, [loggedInUser]);

  return (
    <>
      <HomePage />
    </>
  );
}
