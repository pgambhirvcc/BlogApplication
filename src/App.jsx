import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";

function App() {
  const navigate = useNavigate();
  // const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem("user"));
    // setUserLoggedIn(isUserAuthenticated);
    setUser({
      isUserAuthenticated: userFromStorage ? true: false,
      user: {
        name: userFromStorage && userFromStorage.user.displayName,
        email: userFromStorage && userFromStorage.user.email
      }
    })
    if (!userFromStorage) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={user}>
        {user?.isUserAuthenticated ? <Navbar /> : null}
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<SignupPage />} path="/signup" />
            <Route element={<LoginPage />} path="/login" />
          </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
