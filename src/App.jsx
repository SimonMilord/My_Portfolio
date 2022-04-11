import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
