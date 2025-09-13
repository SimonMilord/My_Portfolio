import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import BitsPage from "./pages/Bits/BitsPage";

function App() {
  const githubUrl = "https://github.com/SimonMilord";
  const linkedInUrl = "https://www.linkedin.com/in/simonmilord/";

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bits" element={<BitsPage />} />
            <Route
              path="/github"
              element={<Navigate to={githubUrl} replace />}
            />
            <Route
              path="/linkedin"
              element={<Navigate to={linkedInUrl} replace />}
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
