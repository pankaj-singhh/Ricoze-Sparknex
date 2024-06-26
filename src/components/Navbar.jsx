import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import sparknexlogo from "../assets/sparknexlogo.svg";
import Features from "./Features";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70; // Adjust this value to account for your fixed navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <div className="">
      <nav className="bg-gray-100 shadow-lg ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-10 w-auto"
                  src={sparknexlogo}
                  alt="Logo"
                />
                <img
                  className="hidden lg:block h-10 w-auto"
                  src={sparknexlogo}
                  alt="Logo"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className="text-customIndigo hover:bg-gray-500 px-3 py-2 rounded-sm font-medium"
                >
                  Home
                </NavLink>
                <HashLink
                  to="/#features"
                  className="text-customIndigo hover:bg-gray-500 px-3 py-2 rounded-sm font-medium"
                  scroll={el => scrollWithOffset(el)}
                >
                  Features
                </HashLink>
                <HashLink
                  to="/#aboutus"
                  className="text-customIndigo hover:bg-gray-500 px-3 py-2 rounded-md font-medium"
                  scroll={el => scrollWithOffset(el)}
                >
                  About Us
                </HashLink>
                <HashLink
                  to="/#contactus"
                  className="text-customIndigo hover:bg-gray-500 px-3 py-2 rounded-md font-medium"
                  scroll={el => scrollWithOffset(el)}
                >
                  Contact Us
                </HashLink>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="block text-customIndigo hover:text-black focus:text-black focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className="text-customIndigo block hover:bg-gray-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </NavLink>
            <HashLink
              to="/#features"
              className="text-customIndigo block hover:bg-gray-500 px-3 py-2 rounded-md text-base font-medium"
              scroll={el => scrollWithOffset(el)}
            >
              Features
            </HashLink>
            <HashLink
              to="/#aboutus"
              className="text-customIndigo block hover:bg-gray-500 px-3 py-2 rounded-md text-base font-medium"
              scroll={el => scrollWithOffset(el)}
            >
              About Us
            </HashLink>
            <HashLink
              to="/#contactus"
              className="text-customIndigo block hover:bg-gray-500 px-3 py-2 rounded-md text-base font-medium"
              scroll={el => scrollWithOffset(el)}
            >
              Contact Us
            </HashLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
