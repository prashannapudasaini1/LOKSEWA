import React from "react";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the Home Page 🏠
        </h1>
        <p className="text-gray-700">
          This is the default page displayed when you open localhost.
        </p>
      </div>
    </>
  );
};

export default Home;
