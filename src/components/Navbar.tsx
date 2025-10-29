"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { ContactInfo } from "./HomePage";

interface NavigationProps {
  contactInfo: ContactInfo;
}

const Navigation: React.FC<NavigationProps> = ({ contactInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full">
      <div className="relative flex justify-end md:justify-start items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="flex md:hidden text-gray-800 p-2 z-50" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40" onClick={() => setIsOpen(false)} />}

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg py-2 md:hidden z-50 transform transition-transform duration-200 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {links.map((link) => (
            <a key={link.name} href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}

          {/* Mobile Contact Info */}
          <div className="border-t mt-2 pt-2 px-4">
            <div className="text-blue-600 font-medium mb-1">Connect with us</div>
            <a href={`tel:${contactInfo.phone}`} className="block text-gray-700 hover:text-blue-600 py-1">
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
