// RegisterComp.tsx
import React from "react";

const RegisterComp: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      {/* Register Form */}
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Create Account
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full p-3 rounded-lg bg-[#F5EFE6] border border-[#CBDCEB] focus:border-[#CBDCEB] focus:outline-none text-black placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-3 rounded-lg bg-[#F5EFE6] border border-[#CBDCEB] focus:outline-none text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full p-3 rounded-lg bg-[#F5EFE6] border border-[#CBDCEB] focus:outline-none text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full p-3 rounded-lg bg-[#F5EFE6] border border-[#CBDCEB] focus:outline-none text-black placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 rounded-lg bg-[#F5EFE6] border border-[#CBDCEB] focus:outline-none text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 rounded-lg bg-[#F5EFE6] border border-[#CBDCEB] focus:outline-none text-black placeholder-gray-400"
            />
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
    </div>
  );
};

export default RegisterComp;
