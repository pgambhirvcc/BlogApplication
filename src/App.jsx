import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";

function App() {

  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/home" />
        <Route element={<SignupPage />} path="/signup" />
        <Route element={<LoginPage />} path="/" />
      </Routes>
    </>
  );
}

export default App;
