import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-400 transition">
            Josvic
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/forex" className="hover:text-yellow-400 transition">
            Forex
          </Link>
          <Link to="/loans" className="hover:text-yellow-400 transition">
            Loans
          </Link>
          <Link to="/student" className="hover:text-yellow-400 transition">
            Student Portal
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About Us
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 text-sm">
          <Link
            to="/login"
            className="border border-white px-4 py-1 rounded hover:bg-white hover:text-gray-800 transition"
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-100 text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 space-y-4 bg-gray-900 text-sm font-medium">
          <Link
            to="/forex"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Forex
          </Link>
          <Link
            to="/loans"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Loans
          </Link>
          <Link
            to="/student"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Student Portal
          </Link>
          <Link
            to="/about"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/login"
            className="block mt-2 border border-white px-4 py-1 rounded hover:bg-white hover:text-gray-800 transition"
            onClick={toggleMenu}
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="block bg-blue-500 px-4 py-1 rounded hover:bg-blue-100 text-white transition"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
