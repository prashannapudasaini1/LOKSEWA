import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; // ✅ Add this

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new URLSearchParams();
      formData.append("username", email);
      formData.append("password", password);

      const response = await fetch("http://127.0.0.1:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        setMessage("✅ Login successful!");
        
        // ✅ Redirect to dashboard after login success
        setTimeout(() => navigate("/udashboard"), 800);
      } else {
        const err = await response.json();
        setMessage("❌ " + (err.detail || "Invalid credentials"));
      }
    } catch (error) {
      setMessage("⚠️ Unable to connect to backend.");
    }
  };

  return (
    <div className="bg-[#F5EFE6] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#3E3E3E]">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-green-200"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-green-200"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#2c6594] text-white py-3 rounded-lg hover:bg-[#45A049] transition duration-200"
            >
              Login
            </button>
          </form>

          {message && (
            <p className="text-center text-sm mt-4 text-gray-700">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
