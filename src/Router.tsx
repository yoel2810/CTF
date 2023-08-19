import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LevelsPage from "./pages/LevelsPage/LevelsPage";
import LevelOne from "./pages/LevelOne/LevelOne";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LevelsPage />} />
        <Route path="/level/1" element={<LevelOne />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
