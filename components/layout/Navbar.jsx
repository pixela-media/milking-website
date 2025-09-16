import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/milkingn_logo.png';
import PartnerLogo from '../../assets/images/maggemane_logo.png';
import MobileMenuIcon from '../../assets/icons/mobile_sidebar.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="Milking Logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#9B5AB3] font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-[#9B5AB3] font-medium">
              Products
            </Link>
            <Link to="/achievements" className="text-gray-700 hover:text-[#9B5AB3] font-medium">
              Achievements
            </Link>
            <Link to="/aboutus" className="text-gray-700 hover:text-[#9B5AB3] font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#9B5AB3] font-medium">
              Contact
            </Link>
          </div>

          {/* Right Logo + Mobile Menu Button */}
          <div className="flex items-center">
            {/* Right Logo */}
            <div className="hidden md:block flex-shrink-0">
              <img
                src={PartnerLogo}
                alt="Partner Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-4 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={MobileMenuIcon}
                alt="Menu"
                className="h-8 w-8"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-4 pb-6 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-[#9B5AB3] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block text-gray-700 hover:text-[#9B5AB3] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/achievements"
            className="block text-gray-700 hover:text-[#9B5AB3] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Achievements
          </Link>
          <Link
            to="/aboutus"
            className="block text-gray-700 hover:text-[#9B5AB3] font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-[#9B5AB3] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
