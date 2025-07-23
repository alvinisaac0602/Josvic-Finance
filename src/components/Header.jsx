import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left - Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-400 transition">
            Josvic
          </Link>
        </div>

        {/* Center - Circular Menu */}
        <div className="hidden md:flex justify-center items-center">
          <div className="border-2 border-white rounded-full px-6 py-2 flex gap-6 text-sm font-medium">
            <Link to="/forex" className="hover:text-yellow-400 transition">
              Forex
            </Link>
            <Link to="/loans" className="hover:text-yellow-400 transition">
              Loans
            </Link>
            <Link
              to="/student-portal"
              className="hover:text-yellow-400 transition"
            >
              Student Portal
            </Link>
            <Link to="/about" className="hover:text-yellow-400 transition">
              About Us
            </Link>
          </div>
        </div>

        {/* Right - Buttons */}
        <div className="flex gap-4 text-sm">
          <Link
            to="/login"
            className="bg-transparent border border-white px-4 py-1 rounded hover:bg-white hover:text-gray-800 transition"
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
