import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import { useAppSelector } from "./store/hooks";

export default function App() {
  const loggedInUser = useAppSelector((state) => state.auth.loggedInUser);

  useEffect(() => {
    console.log("loggedInUser", loggedInUser);
  }, [loggedInUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/catalog" element={<>Catalog</>} />
          <Route path="/resource/:barcode" element={<>Resource</>} />
          <Route path="/profile/:userId" element={<>User Profile</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
