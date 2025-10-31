// RegisterPage.tsx
import React from "react";
import RegisterComp from "../components/RegisterComp";
// replace with your PNG path
import Navbar from "../components/Navbar"; 
// import Footer from "../components/Footer"; 

const RegisterPage: React.FC = () => {
  return (
    <div className="bg-[#F5EFE6] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

    <div className="flex-1 flex items-center justify-center px-6">

      <div className="md:w-1/2 flex justify-center items-center p-10">
        <RegisterComp />
      </div>
    
    </div>

    </div>
  );
};

export default RegisterPage;