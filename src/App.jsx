import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { useEffect } from "react";

function App() {


  const navigate = useNavigate();

  useEffect(() => {
    const isUserAuthenticated = JSON.parse(localStorage.getItem("user"));
    if (!isUserAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SignupPage />} path="/signup" />
        <Route element={<LoginPage />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
