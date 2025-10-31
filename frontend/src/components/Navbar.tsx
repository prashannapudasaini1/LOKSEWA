import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const Navbar: React.FC<HeaderProps> = ({ onNavigate }) => {
  const handleNavClick = (section: string) => {
    if (onNavigate) onNavigate(section);
  };

  return (
    <header className="fixed left-0 right-0 z-50 flex justify-center mt-0 transition-all duration-500">
      {/* Removed max-w-7xl to make it full width */}
      <div className="w-full bg-[#F5EFE6] py-4 px-6 flex items-center justify-between">
        
        {/* Letter Initial */}
        <Link
          to="/"
          className="text-2xl font-bold text-black hover:text-[#1E90FF] transition-colors"
        >
          Z
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link
            to="/udashboard"
            className="text-black font-medium hover:text-[#1E90FF] transition-colors"
          >
            Dashboard
          </Link>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("features");
            }}
            className="text-black font-medium hover:text-[#1E90FF] transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
            className="text-black font-medium hover:text-[#1E90FF] transition-colors"
          >
            About
          </a>
          <a
            href="../pages/login.tsx"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            className="text-black font-medium hover:text-[#1E90FF] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-black font-medium hover:text-[#1E90FF] transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-black text-black font-semibold py-1 px-4 rounded-full hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:text-white transition-all"
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
