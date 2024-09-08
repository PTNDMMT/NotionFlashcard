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
      <nav className="flex-grow">
        <ul className="flex space-x-6 items-center justify-center rounded-md px-4 py-2">
          <li>
            <a href="#about" className="text-white px-3 py-1 block hover:bg-opacity-30 transition duration-300">About</a>
          </li>
          <li>
            <a href="#how-it-works" className="text-white px-3 py-1 block hover:bg-opacity-30 transition duration-300">How it works</a>
          </li>
          <li>
            <a href="#benefits" className="text-white px-3 py-1 block hover:bg-opacity-30 transition duration-300">Benefits</a>
          </li>
        </ul>
      </nav>
      <a 
        href="#join-waitlist" 
        className="px-4 py-2 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 bg-[length:100%_100%] bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))] hover:bg-[linear-gradient(45deg,theme(colors.purple.600),theme(colors.yellow.600))]"
      >
        Join Waitlist
      </a>
    </nav>
  );
};

export default Navbar;
