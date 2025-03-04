import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { IssuePage } from "./pages/IssuePage";
import { Layout } from "./layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/issue" element={<IssuePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
