import "./App.css";
import AppButton from "./components/AppButton";

function App() {
  const handleOnClick = () => {
    alert("Button was clicked");
  };

  return (
    <>
      <AppButton
        type="contained"
        action="error"
        disabled={false}
        handleOnClick={handleOnClick}
      />
    </>
  );
}

export default App;
