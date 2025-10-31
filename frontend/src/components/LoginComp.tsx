import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", { email, password });
    // TODO: add login logic
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-md bg-[#F5EFE6] p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="w-full p-3 rounded-lg bg-[#F5EFE6] border border-[#CBDCEB] focus:outline-none text-black placeholder-gray-400"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full p-3 rounded-lg bg-[#F5EFE6] border border-[#CBDCEB] focus:outline-none text-black placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-cyan-500 rounded-lg hover:bg-cyan-400 font-bold transition-colors text-white"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="mt-5 text-center text-black">
          Don’t have an account?{" "}
          <a href="/register" className="text-cyan-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
