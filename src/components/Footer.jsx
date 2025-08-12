import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/Data/logo/JNK Performance Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#898E96] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
             <img 
  src={logo} 
  alt="Shaun Jankielsohn Logo" 
  className="h-10 w-auto"
/>
            </div>
            <p className="text-gray-300 mb-4">
              Leading sports rehabilitation specialist and medical educator, helping athletes recover and perform at their peak while advancing medical professionals' expertise through evidence-based education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#8CC070] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#8CC070] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#8CC070] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#8CC070] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#8CC070] transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#8CC070] transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-[#8CC070] transition-colors">Testimonials</Link></li>
              <li><Link to="/publications" className="text-gray-300 hover:text-[#8CC070] transition-colors">Publications</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-[#8CC070] transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#8CC070] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-[#8CC070]" />
                <span className="text-gray-300">shaun@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-[#8CC070]" />
                <span className="text-gray-300">+27 (0)11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-[#8CC070]" />
                <span className="text-gray-300">Cape Town, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Shaun Jankielsohn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;