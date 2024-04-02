import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-black p-4 flex justify-between items-center">
      {/* Left Side Logo */}
      <div className="flex items-center">
        <span className="text-white text-5xl font-bold ml-20 ">OpenX</span>
      </div>

      {/* Centered Links */}
      <div className="flex justify-center">
        <a href="/" className="text-white mx-4 hover:text-gray-300">
          Home
        </a>
        <a href="/Scan" className="text-white mx-4 hover:text-gray-300">
          Scan
        </a>
        <a href="#about" className="text-white mx-4 hover:text-gray-300">
          About
        </a>
        <a href="#service" className="text-white mx-4 hover:text-gray-300">
          Service
        </a>
        <a href="#pricing" className="text-white mx-4 hover:text-gray-300">
          Pricing
        </a>
        <a href="#faq" className="text-white mx-4 hover:text-gray-300">
          FAQ
        </a>
      </div>

      {/* Right Side Button */}
      <div className="mr-80">
        <button className="bg-green-900 hover:bg-green-600 text-white font-bold py-2 px-6  rounded">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
