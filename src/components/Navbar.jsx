// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/logo-SafariTrips.png";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Us", href: "aboutUs" },
    { name: "Travel Packages", href: "travel-packages" },
    // { name: "Experiences", href: "#Experiences" },
    // { name: "Testimonials", href: "#Testimonials" },
    // { name: "Services", href: "#Services" },
    // { name: "Community", href: "#Community" },
     { name: "Contact Us", href: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 items-center flex justify-center ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* bg-gradient-to-r from-amber-500 to-orange-500  */}
          <div className="rounded-xl w-14 h-14 flex items-center justify-center">
            <span className="text-white font-bold text-xl">
             <a href="/"><img src={logo} alt="company logo"></img></a>
            </span>
          </div>
          <a href="/" className="ml-3 text-2xl font-bold tracking-tight text-gray-900">
            Safari Trips
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                href={item.href}
                key={item.name}
                className="font-medium text-gray-900 hover:text-amber-600 transition-colors duration-300"
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={`/${item.href}`}
                key={item.name}
                className="font-medium text-gray-900 hover:text-amber-600 transition-colors duration-300"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
       <a href = "/contact"> 
       <button className="md:block hidden ml-4 px-8 py-3 hover:bg-orange-500 bg-gray-900 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 transform hover:-translate-y-0.5">
          Book Now
        </button>
        </a>
     

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl z-50 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
 </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 pt-16">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-medium text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
