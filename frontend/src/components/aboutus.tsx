import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Loksewa</h1>

      <ul className="flex space-x-6">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
