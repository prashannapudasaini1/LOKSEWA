// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import UDashboard from "./pages/udashboard"; // ✅ Corrected import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/udashboard" element={<UDashboard />} /> {/* ✅ Added route */}
      </Routes>
    </Router>
  );
};

export default App;
