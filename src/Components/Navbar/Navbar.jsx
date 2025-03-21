import React, { useState } from "react";
import { HiShoppingCart, HiMenu, HiX } from "react-icons/hi";
import hiajLogo from "../../assets/hiaj-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F3D5B5] px-4 py-6 shadow-md sticky z-50 top-0">
      <div className="container mx-auto">
        <div className="nav-items flex items-center justify-between text-xl">
          {/* Left Side Navigation (hidden on mobile) */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="text-black hover:text-amber-900 transition duration-300"
            >
              Home
            </a>

            <a
              href="/menu"
              className="text-black hover:text-amber-900 transition duration-300"
            >
              Menu
            </a>

            {/* Party Occasions Dropdown */}
            <div className="relative group">
              <button className="text-black hover:text-amber-900 transition duration-300">
                Party Occasions
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md">
                <a
                  href="/occasions/birthday"
                  className="block px-4 py-2 hover:bg-[#E5D3B7]"
                >
                  Birthday
                </a>
                <a
                  href="/occasions/holidays"
                  className="block px-4 py-2 hover:bg-[#E5D3B7]"
                >
                  Holidays
                </a>
                <a
                  href="/occasions/love"
                  className="block px-4 py-2 hover:bg-[#E5D3B7]"
                >
                  Love
                </a>
                <a
                  href="/occasions/thank-you"
                  className="block px-4 py-2 hover:bg-[#E5D3B7]"
                >
                  Thank You
                </a>
                <a
                  href="/occasions/christmas"
                  className="block px-4 py-2 hover:bg-[#E5D3B7]"
                >
                  Christmas
                </a>
              </div>
            </div>
          </div>

          {/* Hamburger Menu Button (visible on mobile) */}
          <button
            className="lg:hidden text-brown-800 hover:text-brown-600"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>

          {/* Centered Logo */}
          <div className="logo mx-auto lg:mx-0">
            <img src={hiajLogo} alt="Heaven in a Jar" className="w-full" />
          </div>

          {/* Right Side - Cart & Order Button (hidden on mobile) */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="/catering"
              className=" text-black hover:text-amber-900 transition duration-300"
            >
              Catering
            </a>
            <a
              href="/about"
              className="text-black hover:text-amber-900 transition duration-300"
            >
              About
            </a>
            <button className="text-brown-800 hover:text-brown-600">
              <HiShoppingCart className="w-6 h-6" />
            </button>
            <button className="bg-brown-800 text-white py-2 rounded-full hover:bg-brown-700 transition-colors">
              Order Now
            </button>
          </div>
        </div>

        {/* Mobile Menu (visible when isOpen is true) */}
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-4 py-2 text-brown-800 hover:bg-[#d3c1a5]"
            >
              Home
            </a>

            {/* Mobile Menu Dropdown */}
            <div className="px-4 py-2">
              <button className="text-brown-800 w-full text-left">Menu</button>
              <div className="pl-4 mt-2 space-y-2">
                <a
                  href="/menu/desserts"
                  className="block py-2 text-brown-800 hover:bg-[#d3c1a5]"
                >
                  Desserts
                </a>
                <a
                  href="/menu/coffee"
                  className="block py-2 text-brown-800 hover:bg-[#d3c1a5]"
                >
                  Coffee
                </a>
                <a
                  href="/menu/shakes"
                  className="block py-2 text-brown-800 hover:bg-[#d3c1a5]"
                >
                  Shakes
                </a>
                <a
                  href="/menu/oats"
                  className="block py-2 text-brown-800 hover:bg-[#d3c1a5]"
                >
                  Oats
                </a>
                <a
                  href="/menu/acai"
                  className="block py-2 text-brown-800 hover:bg-[#d3c1a5]"
                >
                  Acai
                </a>
              </div>
            </div>

            {/* Mobile Party Occasions Dropdown */}
            <div className="px-4 py-2">
              <button className="text-brown-800 w-full text-left">
                Party Occasions
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <a
                  href="/occasions/birthday"
                  className="block py-2 text-brown-800 hover:bg-[#d3c1a5]"
                >
                  Birthday
                </a>
                <a
                  href="/occasions/holidays"
                  className="block py-2 text-brown-800 hover:bg-[#d3c1a5]"
                >
                  Holidays
                </a>
                <a
                  href="/occasions/love"
                  className="block py-2 text-brown-800 hover:bg-[#d3c1a5]"
                >
                  Love
                </a>
                <a
                  href="/occasions/thank-you"
                  className="block py-2 text-brown-800 hover:bg-[#d3c1a5]"
                >
                  Thank You
                </a>
                <a
                  href="/occasions/christmas"
                  className="block py-2 text-brown-800 hover:bg-[#d3c1a5]"
                >
                  Christmas
                </a>
              </div>
            </div>

            <a
              href="/catering"
              className="block px-4 py-2 text-brown-800 hover:bg-[#d3c1a5]"
            >
              Catering
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-brown-800 hover:bg-[#d3c1a5]"
            >
              About
            </a>

            {/* Mobile Cart and Order Button */}
            <div className="px-4 py-2 space-y-2">
              <button className="flex items-center text-brown-800">
                <HiShoppingCart className="w-6 h-6 mr-2" />
                Cart
              </button>
              <button className="w-full bg-brown-800 text-white px-6 py-2 rounded-full hover:bg-brown-700 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
