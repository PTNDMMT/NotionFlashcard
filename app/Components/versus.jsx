"use client"
import React, { useState, useEffect } from 'react'
import IframeComponent from './iFrameWaitList';
import { Icon } from '@iconify/react';
import Confetti from 'react-confetti'
import Link from 'next/link';

const Versus = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleButtonClick = () => {
    setIsConfettiActive(true);
    document.getElementById('cta2').showModal();
    setTimeout(() => setIsConfettiActive(false), 10000); // Confetti lasts for 10 seconds
  };
  
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 rounded-3xl relative">
      {isConfettiActive && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
          wind={0.05}
          colors={['#FF00FF', '#00FFFF', '#FFFF00', '#FF0000', '#00FF00', '#0000FF']}
          confettiSource={{x: 0, y: 0, w: windowSize.width, h: 0}}
        />
      )}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          Our Solution vs. Quizlet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
            <ul className="space-y-2 text-gray-200 text-lg">
              <li className="flex items-center gap-3"><Icon icon="mingcute:check-fill" width="35" height="35"  style={{color: '#0ca60c'}} /> Seamlessly integrates with Notion</li>
              <li className="flex items-center gap-3"><Icon icon="mingcute:check-fill" width="35" height="35"  style={{color: '#0ca60c'}} /> Create flashcards directly from your notes</li>
              <li className="flex items-center gap-3"><Icon icon="mingcute:check-fill" width="35" height="35"  style={{color: '#0ca60c'}} /> No need to switch between apps</li>
              <li className="flex items-center gap-3"><Icon icon="mingcute:check-fill" width="35" height="35"  style={{color: '#0ca60c'}} /> Customized learning experience</li>
              <li className="flex items-center gap-3"><Icon icon="mingcute:check-fill" width="35" height="35"  style={{color: '#0ca60c'}} /> Interactive embedded flashcards</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">Quizlet</h3>
            <ul className="space-y-2 text-gray-200 text-lg">
              <li className="flex items-center gap-3"><Icon icon="line-md:remove" width="35" height="35" style={{color: '#ba2f2f', strokeWidth: '3'}} /> Separate platform from your notes</li>
              <li className="flex items-center gap-3"><Icon icon="line-md:remove" width="35" height="35"  style={{color: '#ba2f2f', strokeWidth: '3'}} /> Manual creation of flashcards</li>
              <li className="flex items-center gap-3"><Icon icon="line-md:remove" width="35" height="35"  style={{color: '#ba2f2f', strokeWidth: '3'}} /> Requires switching between apps</li>
              <li className="flex items-center gap-3"><Icon icon="mingcute:check-fill" width="35" height="35"  style={{color: '#0ca60c'}} /> Variety of study modes</li>
              <li className="flex items-center gap-3"><Icon icon="line-md:remove" width="35" height="35"  style={{color: '#ba2f2f', strokeWidth: '3'}} /> Limited integration with note-taking apps</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button 
          className="px-9 py-5 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 bg-[length:100%_100%] bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))] hover:bg-[linear-gradient(45deg,theme(colors.purple.600),theme(colors.yellow.600))]"
          onClick={handleButtonClick}
        >
          <p className="text-white font-semibold text-xl">
            Take your learning to the next level
          </p>
        </button>
      </div>
      <dialog id="cta2" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-6 sm:p-8 md:p-12 relative">
          <h3 className="font-bold text-3xl sm:text-4xl text-center mb-4 ">
            🎉
            <span className="bg-clip-text text-transparent bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))]"> You're almost in!</span>
          </h3>
          <p className="text-xl sm:text-2xl text-center mb-6 font-semibold">Don't Miss Out on This Opportunity! 🚀</p>
          <p className="text-base sm:text-base mb-4">
            You're one step away from transforming the way you study! By joining our waitlist, you'll not only be among the first to experience our revolutionary flashcard tool for Notion, but you'll also lock in an exclusive 25% discount when we launch!
          </p>
          <p className="text-xl sm:text-base font-semibold mb-2">Why join the waitlist?</p>
          <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
            <li> <strong>Early Access:</strong> Be the first to supercharge your Notion workspace.</li>
            <li> <strong>Exclusive Discount:</strong> Secure 25% off just for signing up!</li>
            <li> <strong>Maximize Your Learning:</strong> Get a head start on using our tool to boost retention and study smarter, not harder.</li>
          </ul>
          <p className="text-xl sm:text-base font-semibold mb-4">This is your chance to level up your study game—don't miss it!</p>
          <p className="text-base sm:text-lg text-center mb-6">To proceed, please fill out the form below. If you have any questions, feel free to reach out to us.</p>
          <IframeComponent />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  )
}

export default Versus