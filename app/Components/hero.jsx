import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            Supercharge Your Notion notes with powerful flashcard
        </h1>
        <p className="mt-3 text-xl text-gray-200 sm:mt-5 sm:text-2xl">
        Transform your Notion notes into dynamic, interactive learning tools. Our product seamlessly embeds into Notion, using proven techniques to boost retention and accelerate your study process.
        </p>
        <div className="mt-8 sm:mt-12">
          <a
            href="#join-waitlist"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Start enhancing your learning today
          </a>
        </div>
        <p className="mt-3 text-sm text-gray-300">Turn Notion flashcards into an interactive learning experience.</p>
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-64 backdrop-filter backdrop-blur-lg bg-opacity-20 bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
            />
          </div>
          <button className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
