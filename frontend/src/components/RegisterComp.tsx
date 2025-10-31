import React, { useState } from "react";

const RegisterComp: React.FC = () => {
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Account registered!");
    // You can redirect to login or dashboard here
  };

  return (
    <div className="w-full max-w-md bg-[#F5EFE6] p-10 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        Create Account
      </h2>

      <form className="space-y-5" onSubmit={handleRegisterSubmit}>
        <div>
          <label className="block mb-2 text-sm font-medium text-black">Username</label>
          <input type="text" placeholder="Enter username" className="input" required />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-black">Email</label>
          <input type="email" placeholder="Enter email" className="input" required />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-black">Password</label>
          <input type="password" placeholder="Enter password" className="input" required />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-black">Confirm Password</label>
          <input type="password" placeholder="Confirm password" className="input" required />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-cyan-500 rounded-lg hover:bg-cyan-400 font-bold transition-colors text-white"
        >
          Register
        </button>
      </form>

      <p className="mt-5 text-center text-black">
        Already have an account?{" "}
        <a href="/login" className="text-cyan-400 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterComp;
