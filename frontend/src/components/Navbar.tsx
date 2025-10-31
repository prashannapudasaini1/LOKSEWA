import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold">MyApp</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
