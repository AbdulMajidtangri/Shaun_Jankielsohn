import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Data/logo/JNK Performance Logo.png'; // Adjust the path according to your file structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Publications', path: '/publications' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-[#3398FF] shadow-lg fixed w-full z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="Shaun Jankielsohn Logo" 
                className="h-10 w-auto" // Adjust height as needed
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-[#8CC070] border-b-2 border-[#8CC070]'
                    : 'text-white hover:text-[#FAA95E]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#8CC070] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#7AB05F] transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FAA95E] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#3398FF] pb-4 w-full max-w-full overflow-x-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 text-sm font-medium ${
                  location.pathname === item.path
                    ? 'text-[#8CC070]'
                    : 'text-white hover:text-[#FAA95E]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                to="/contact"
                className="block w-full bg-[#8CC070] text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-[#7AB05F] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;