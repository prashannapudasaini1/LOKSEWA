import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const Navbar: React.FC<HeaderProps> = ({ onNavigate }) => {
  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <header className="fixed left-0 right-0 z-50 flex justify-center mt-0 transition-all duration-500">
      <div className="max-w-7xl w-full bg-transparent py-4 px-6 flex items-center justify-between">
        
        {/* Letter Initial (instead of logo) */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-[#1E90FF] transition-colors"
        >
          Z
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link
            to="/AdminDb"
            className="text-gray-200 font-medium hover:text-[#1E90FF] transition-colors"
          >
            Dashboard
          </Link>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("features");
            }}
            className="text-gray-200 font-medium hover:text-[#1E90FF] transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
            className="text-gray-200 font-medium hover:text-[#1E90FF] transition-colors"
          >
            About
          </a>
          <a
            href="../pages/login.tsx"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            className="text-gray-200 font-medium hover:text-[#1E90FF] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-gray-200 font-medium hover:text-[#1E90FF] transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-gray-200 text-gray-200 font-semibold py-1 px-4 rounded-full hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:text-white transition-all"
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
