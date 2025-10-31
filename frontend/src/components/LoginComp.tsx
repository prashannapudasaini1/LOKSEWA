import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", { email, password });
    // TODO: add your login logic (API call, validation, etc.)
  };

  return (
    <div className="w-full bg-black/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition duration-300"
        >
          Login
        </button>
      </form>

      {/* Extra Links */}
      <p className="text-gray-400 text-sm text-center mt-6">
        Don’t have an account?{" "}
        <a href="/register" className="text-cyan-400 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
};

export default Login;
