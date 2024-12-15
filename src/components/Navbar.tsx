"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="py-4 relative">
      <div className="flex justify-between items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-white hover:text-blue-200 transition-colors font-medium">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg py-2 md:hidden mt-2 z-40">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="block px-4 py-2 text-blue-900 hover:bg-blue-50 transition-colors" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
