import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Loginpage from "./pages/login";
import Registerpage from "./pages/register";
import Dashboard from "./pages/udashboard";
import Profile from "./pages/profile";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="register" element={<Registerpage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;