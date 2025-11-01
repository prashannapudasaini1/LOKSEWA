import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Loginpage from "./pages/login";
import Registerpage from "./pages/register";
import Dashboard from "./pages/udashboard";
import Profile from "./pages/profile";
import Exams from "./pages/exams";
import Results from "./pages/results";
import "./index.css";
import Application from "./pages/applications";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="register" element={<Registerpage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/exams" element={<Exams />} />
        <Route path="/dashboard/applications" element={<Application />} />
        <Route path="/dashboard/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;