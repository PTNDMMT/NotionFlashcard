"use client"
import React, { useState } from 'react';
import IframeComponent from './iFrameWaitList';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const flashcards = [
    { term: 'term == Definition', definition: 'A word or phrase that represents an idea or thing.' },
    { term: 'flashcard == The best study tool', definition: 'A card used as a memory aid, often with a question on one side and the answer on the other.' },
    { term: 'notecard == Memory Aid', definition: 'A small card for writing notes to help remember key information.' },
    { term: 'quizlet == Ugly flashcard App', definition: 'An app for learning with flashcards, though less customizable than Notion.' }
  ];

  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
  };

  return (
    <div className="min-h-full mb-40 mt-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl w-full space-y-8 text-center mb-16">
        <div className="backdrop-filter backdrop-blur-md bg-opacity-10 bg-white rounded-3xl py-2 px-4 inline-block border border-white border-opacity-30">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))] font-bold text-lg">
            Announcing our private beta
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Boost your grades <br /> with <span className="bg-clip-text text-transparent bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))]"> Notion flashcards</span>
        </h1>
        <p className="mt-3 text-xl text-gray-200 sm:mt-5 sm:text-2xl">
        Transform your Notion notes into dynamic, interactive learning tools. Our product seamlessly embeds into Notion, using proven techniques to boost retention and accelerate your study process.
        </p>
        <div className="h-8 mt-4">
          <IframeComponent />
          <div className="flex flex-col items-center gap-6">
            <p className="text-white text-base mb-2 mt-6">Scroll to see why these flashcards are <span className="bg-clip-text text-transparent bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))] font-semibold">perfect for you</span></p>
            <a href="#problem" className="animate-bounce">
              <svg className="w-16 h-16 text-white cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
