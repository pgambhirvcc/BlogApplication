import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";

function App() {

  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </>
  );
}

export default App;
