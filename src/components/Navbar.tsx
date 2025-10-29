// Navbar.tsx - Enhanced with glass morphism and animations
"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ContactInfo } from "./HomePage";

interface NavigationProps {
  contactInfo: ContactInfo;
}

const Navigation: React.FC<NavigationProps> = ({ contactInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <a key={link.name} href={link.href} className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="flex md:hidden text-gray-800 p-2 z-50 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 md:hidden z-40 ${isOpen ? "opacity-50" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Navigation Menu - Enhanced */}
        <div
          className={`fixed right-4 top-20 w-72 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl py-2 md:hidden z-50 transform transition-all duration-300 ${
            isOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95"
          }`}
        >
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Contact Info */}
          <div className="border-t mt-2 pt-2 px-6">
            <div className="text-blue-600 font-semibold mb-2">Connect with us</div>
            <a href={`tel:${contactInfo.phone}`} className="flex items-center text-gray-700 hover:text-blue-600 py-2 transition-colors">
              <span className="text-sm">{contactInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
