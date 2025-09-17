import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/images/milkingn_logo.png';
import PartnerLogo from '../../assets/images/maggemane_logo.png';
import MobileMenuIcon from '../../assets/icons/mobile_sidebar.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

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
              onClick={() => window.location.href = '/'}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#9B5AB3] font-medium">
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-[#9B5AB3] font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="text-gray-700 hover:text-[#9B5AB3] font-medium"
            >
              Achievements
            </button>
            <Link to="/about-us" className="text-gray-700 hover:text-[#9B5AB3] font-medium">
              About Us
            </Link>
            <Link to="/contact-us" className="text-gray-700 hover:text-[#9B5AB3] font-medium">
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
                onClick={() => window.location.href = '/visit-us'}
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
          <button
            onClick={() => scrollToSection('products')}
            className="block w-full text-left text-gray-700 hover:text-[#9B5AB3] font-medium"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('achievements')}
            className="block w-full text-left text-gray-700 hover:text-[#9B5AB3] font-medium"
          >
            Achievements
          </button>
          <Link
            to="/about-us"
            className="block text-gray-700 hover:text-[#9B5AB3] font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
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