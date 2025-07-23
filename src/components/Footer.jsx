import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Josvic Finance</h3>
          <p className="text-sm">
            Empowering traders, supporting learners, and financing futures.
          </p>
        </div>

        {/* Useful Links */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-end gap-4 text-xl">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Josvic Finance. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
