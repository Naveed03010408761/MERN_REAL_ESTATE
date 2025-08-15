import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white">DreamHomes</h2>
          <p className="mt-2 text-sm">
            Helping you find the home that fits your dreams.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white transition-colors duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Email: contact@dreamhomes.com</p>
          <p>Phone: +92 300 1234567</p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} DreamHomes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
