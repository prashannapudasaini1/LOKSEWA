import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Loginpage from "./pages/login";
import Registerpage from "./pages/register";
import Dashboard from "./pages/udashboard";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="register" element={<Registerpage />} />
        <Route path="udashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;