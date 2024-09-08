import React from 'react';
import logo from '../assets/logo.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <Image src={logo} height={50} width={50} alt="NotionFlashcard Logo" className="mr-3" />
        <span className="text-white text-xl font-semibold">NotionFlashcard</span>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white rounded-full shadow-md px-6 py-2">
          <ul className="flex space-x-6 items-center">
            <li><a href="#about" className="text-white hover:text-gray-200">About</a></li>
            <li><a href="#how-it-works" className="text-white hover:text-gray-200">How it works</a></li>
            <li><a href="#benefits" className="text-white hover:text-gray-200">Benefits</a></li>
          </ul>
        </nav>
        <a 
          href="#join-waitlist" 
          className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white text-white px-4 py-2 rounded-full hover:bg-opacity-40 transition duration-300"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
