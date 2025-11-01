import React, { useState, useEffect } from "react";
import Login from "../components/LoginComp";
import Register from "../components/RegisterComp";

const HeroSection: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [loginFade, setLoginFade] = useState(false);
  const [registerFade, setRegisterFade] = useState(false);

  useEffect(() => {
    if (isLoginOpen) {
      setTimeout(() => setLoginFade(true), 10);
    }
  }, [isLoginOpen]);

  useEffect(() => {
    if (isRegisterOpen) {
      setTimeout(() => setRegisterFade(true), 10);
    }
  }, [isRegisterOpen]);

  const closeLoginModal = () => {
    setLoginFade(false);
    setTimeout(() => setIsLoginOpen(false), 300);
  };

  const closeRegisterModal = () => {
    setRegisterFade(false);
    setTimeout(() => setIsRegisterOpen(false), 300);
  };

  return (
    <div
      className="relative w-full h-[90vh] overflow-hidden 
      bg-gradient-to-br from-[#00BFFF] via-[#E8DFCA] to-[#1E90FF]"
    >
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
        <h1 className="text-black text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
          WELCOME TO LOKSEWA
        </h1>
        <p className="text-black text-lg md:text-2xl mb-6">
          Coming up with all your Loksewa Updated.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="bg-white text-[#1E90FF] font-bold py-2 px-6 rounded shadow hover:bg-[#F0F9FF] transition"
          >
            Log In
          </button>
          <button
            onClick={() => setIsRegisterOpen(true)}
            className="border border-black text-black font-bold py-2 px-6 rounded hover:bg-white hover:text-[#1E90FF] transition"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            loginFade ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeLoginModal}
        >
          <div
            className={`relative w-full max-w-lg mx-4 transition-transform duration-300 ${
              loginFade ? "scale-100" : "scale-90"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Login />
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            registerFade ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeRegisterModal}
        >
          <div
            className={`relative w-full max-w-lg mx-4 transition-transform duration-300 ${
              registerFade ? "scale-100" : "scale-90"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Register />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
