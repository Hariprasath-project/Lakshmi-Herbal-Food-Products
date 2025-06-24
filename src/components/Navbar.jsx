import React, { useState } from "react";
import { Menu, X, Leaf, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-emerald-800 via-green-700 to-emerald-800 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
              <Leaf className="h-8 w-8 text-emerald-100" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold text-white font-serif tracking-wide">
                Lakshmi Herbal
              </h1>
              <p className="text-emerald-100 text-xs sm:text-sm font-medium -mt-1">
                Food Products
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-emerald-200 transition-colors duration-300 font-medium text-lg hover:scale-105 transform"
            >
              Home
            </a>
            <div className="relative group">
              <a
                href="#products"
                className="text-white hover:text-emerald-200 transition-colors duration-300 font-medium text-lg hover:scale-105 transform"
              >
                Products
              </a>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1">
                <div className="py-2">
                  <a
                    href="#soup-powders"
                    className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200 font-medium"
                  >
                    Herbal Soup Powders
                  </a>
                  <a
                    href="#tea-powders"
                    className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200 font-medium"
                  >
                    Herbal Tea Powders
                  </a>
                  <a
                    href="#premix"
                    className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200 font-medium"
                  >
                    Herbal Food Pre Mix
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#about"
              className="text-white hover:text-emerald-200 transition-colors duration-300 font-medium text-lg hover:scale-105 transform"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-white hover:text-emerald-200 transition-colors duration-300 font-medium text-lg hover:scale-105 transform"
            >
              Contact
            </a>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-emerald-100">
              <a
                href="tel:+91 8667816842"
                className="flex items-center space-x-1"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+91 8667816842</span>
              </a>
            </div>
            <div className="flex items-center space-x-2 text-emerald-100">
              <a
                href="mailto:harisivaguru28102002@gmail.com"
                className="flex items-center space-x-1"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">
                  harisivaguru28102002@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-lg p-2 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-emerald-900/95 backdrop-blur-sm border-t border-emerald-600/50">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#home"
              className="block text-white hover:text-emerald-200 transition-colors duration-200 font-medium text-lg py-2"
            >
              Home
            </a>

            {/* Mobile Products Dropdown */}
            <div className="space-y-2">
              <a
                href="#products"
                className="block text-white hover:text-emerald-200 transition-colors duration-200 font-medium text-lg py-2"
              >
                Products
              </a>
              <div className="pl-4 space-y-2 border-l-2 border-emerald-600">
                <a
                  href="#soup-powders"
                  className="block text-emerald-100 hover:text-white transition-colors duration-200 py-1"
                >
                  Herbal Soup Powders
                </a>
                <a
                  href="#tea-powders"
                  className="block text-emerald-100 hover:text-white transition-colors duration-200 py-1"
                >
                  Herbal Tea Powders
                </a>
                <a
                  href="#premix"
                  className="block text-emerald-100 hover:text-white transition-colors duration-200 py-1"
                >
                  Herbal Food Pre Mix
                </a>
              </div>
            </div>

            <a
              href="#about"
              className="block text-white hover:text-emerald-200 transition-colors duration-200 font-medium text-lg py-2"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-emerald-200 transition-colors duration-200 font-medium text-lg py-2"
            >
              Contact
            </a>

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-emerald-600/50 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-100">
                <a
                  href="tel:+91 8667816842"
                  className="flex items-center space-x-3"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 8667816842</span>
                </a>
              </div>
              <div className="flex items-center space-x-2 text-emerald-100">
                <a
                  href="mailto:harisivaguru28102002@gmail.com"
                  className="flex items-center space-x-3"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">
                    harisivaguru28102002@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
