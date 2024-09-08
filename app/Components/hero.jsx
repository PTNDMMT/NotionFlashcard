import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl w-full space-y-8 text-center mb-16">
        <div className="backdrop-filter backdrop-blur-md bg-opacity-10 bg-white rounded-3xl py-2 px-4 inline-block border border-white border-opacity-30">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))] font-bold text-lg">
            Announcing our private beta
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            Supercharge Your Notion notes with <span className="bg-clip-text text-transparent bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))]">powerful flashcard</span>
        </h1>
        <p className="mt-3 text-xl text-gray-200 sm:mt-5 sm:text-2xl">
        Transform your Notion notes into dynamic, interactive learning tools. Our product seamlessly embeds into Notion, using proven techniques to boost retention and accelerate your study process.
        </p>
        <p className="mt-3 text-sm text-gray-300">Turn Notion flashcards into an interactive learning experience.</p>
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-64 backdrop-filter backdrop-blur-md bg-opacity-10 bg-white rounded-lg overflow-hidden border border-opacity-30 border-white shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
            />
          </div>
          <button className="w-full sm:w-auto px-6 py-2 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 bg-[length:100%_100%] bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))] hover:bg-[linear-gradient(45deg,theme(colors.purple.600),theme(colors.yellow.600))]">
            Join Waitlist
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <p className="text-white text-base mb-2">Scroll to see why these flashcards are <span className="bg-clip-text text-transparent bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))] font-semibold">perfect for you</span></p>
        <a href="#problem" className="animate-bounce">
          <svg className="w-12 h-12 text-white cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;