import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { IssuePage } from "./pages/IssuePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/issue" element={<IssuePage />} />
      </Routes>
    </>
  );
}

export default App;
