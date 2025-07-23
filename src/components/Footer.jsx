import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-blue-400">
            Josvic Finance
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Josvic Finance is dedicated to empowering youth through forex
            trading, affordable loan services, and educational platforms.
            Registered with URSB.
          </p>
        </div>

        {/* Useful Links */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-blue-300 mb-3">
            Quick Links
          </h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/forex" className="hover:text-white transition">
                Forex Trading
              </a>
            </li>
            <li>
              <a href="/loans" className="hover:text-white transition">
                Loan Services
              </a>
            </li>
            <li>
              <a href="/student-portal" className="hover:text-white transition">
                Student Portal
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-white transition">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold text-blue-300 mb-3">
            Follow Us
          </h4>
          <div className="flex justify-center md:justify-end gap-5 text-2xl text-gray-300">
            <a
              href="https://facebook.com/josvicfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/josvicfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/josvicfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/josvicfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Josvic Finance Development Limited.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
