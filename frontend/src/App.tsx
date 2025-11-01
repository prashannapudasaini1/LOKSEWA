import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Loginpage from "./pages/login";
import Registerpage from "./pages/register";
import Dashboard from "./pages/udashboard";
import Profile from "./pages/profile";
import Exams from "./pages/exams";
import Results from "./pages/results";
import Application from "./pages/applications";
import AdminDashboard from "./admin/admindashboard";
import AdminProfile from "./admin/adminprofile";

import "./index.css";
import AdminExam from "./admin/adminexams";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />

        {/* User Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/exams" element={<Exams />} />
        <Route path="/dashboard/applications" element={<Application />} />
        <Route path="/dashboard/results" element={<Results />} />

        {/* Admin Dashboard Routes */}
        <Route path="/admin/admindashboard" element={<AdminDashboard />} />
        <Route path="/admin/admindashboard/profile" element={<AdminProfile />} />
        <Route path="/admin/admindashboard/adminexam" element={<AdminExam />} />

        <Route path="/admin/admindashboard/applicants" element={<div>Applicants Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
