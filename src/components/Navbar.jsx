"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Products",
      path: "#",
      dropdown: [
        { name: "Chemicals", path: "/chemicals" },
        { name: "Physics Equipment", path: "/physics-equipment" },
        { name: "Sports Equipment", path: "/sports" },
      ],
    },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Handle dropdown with proper delays
  const handleDropdownEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    // Small delay to prevent flickering when moving mouse between button and dropdown
    setTimeout(() => {
      setDropdownOpen(false);
    }, 100);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-16 h-16  rounded-lg flex items-center justify-center">
              <img src="/Logo.png" alt="logo" />
            </div>
            <span
              className={`font-bold text-xl ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Mahavir Surgical and Chemicals
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative group"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-orange-500 ${
                        scrolled ? "text-black" : "text-white"
                      }`}
                    >
                      {/* hover:text-orange-500 */}
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-50 transition-all duration-200 ${
                        dropdownOpen
                          ? "opacity-100 visible transform translate-y-0"
                          : "opacity-0 invisible transform -translate-y-2"
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-500 hover:text-white transition-colors duration-200"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-orange-500 hover:text-white ${
                      location.pathname === item.path
                        ? " text-orange-500"
                        : scrolled
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:text-white rounded-md transition-colors duration-200"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        <span className="flex items-center justify-between">
                          {item.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              dropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>
                      {dropdownOpen && (
                        <div className="pl-4 mt-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-500 hover:text-white rounded-md transition-colors duration-200"
                              onClick={() => {
                                setIsOpen(false);
                                setDropdownOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:text-white rounded-md transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
