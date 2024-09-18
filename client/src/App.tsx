import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import Layout from "./components/Layout";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchUser } from "./store/reducers/auth";
import ProfilePage from "./pages/Profile";

export default function App() {
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector((state) => state.auth.loggedInUser);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId && !loggedInUser) {
      dispatch(fetchUser({ userId, property: "loggedInUser" }));
    }
  }, [loggedInUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/catalog" element={<>Catalog</>} />
          <Route path="/resource/:barcode" element={<>Resource</>} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
