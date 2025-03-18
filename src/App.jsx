import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {


  const navigate = useNavigate();
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const isUserAuthenticated = JSON.parse(localStorage.getItem("user"));
    setUserLoggedIn(isUserAuthenticated)
    if (!isUserAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      { isUserLoggedIn ? <Navbar /> : null }
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SignupPage />} path="/signup" />
        <Route element={<LoginPage />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
