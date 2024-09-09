"use client"
import React, { useState } from 'react';
import IframeComponent from './iFrameWaitList';

const Hero = () => {
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
