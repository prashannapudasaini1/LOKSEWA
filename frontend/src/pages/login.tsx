import React from "react";
import Login from "../components/LoginComp";
import Navbar from "../components/Navbar"; // optional
// import Footer from "../components/footer"; 


const LoginPage: React.FC = () => {
  return (
    <div className="bg-[#F5EFE6] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
          {/* Left Side - Image */}

          {/* Right Side - Login Form */}
          <div className="w-full md:w-1/2">
            <Login />
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default LoginPage;