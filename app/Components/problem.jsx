"use client"
import React, { useState, useEffect } from 'react'
import IframeComponent from './iFrameWaitList';
import Confetti from 'react-confetti'
import { motion, useScroll, useTransform } from 'framer-motion';

const Problem = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]); 

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
    document.getElementById('cta1').showModal();
    setTimeout(() => setIsConfettiActive(false), 10000); // Confetti lasts for 10 seconds
  };

  return (
    <motion.section style={{ scale }} className="mb-1 min-h-screen px-4 sm:px-6 lg:px-8 relative" id="problem">
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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Feeling Overwhelmed by Your Study Routine?
        </h2>
        <div className="space-y-8 text-gray-300 text-lg">
          <p>
            If you're like many students and professionals, your Notion workspace is full of notes, but studying and retaining that information feels like a struggle. You've tried different methods—flashcard apps, separate tools, even traditional notecards—but nothing sticks. Constantly switching between tools adds frustration, making the process disjointed.
          </p>
          <p>
            Despite your detailed Notion notes, they feel static and unengaging, and traditional flashcard methods seem outdated. Study sessions turn into repetitive cycles of re-reading with no real retention. Manually creating flashcards or embedding other tools just adds complexity.
          </p>
          <p className="text-white font-semibold text-xl">
            Now, imagine <span className="bg-clip-text text-transparent bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))]">effortlessly transforming your Notion notes into interactive flashcards within your workspace</span>. No more juggling apps or inefficient methods. Our solution lets you convert Notion pages into dynamic learning tools with just a few clicks, streamlining study sessions and enhancing retention.
          </p>
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
      </div>
      <dialog id="cta1" className="modal">
        <div className="modal-box w-10/12 max-w-4xl p-6 sm:p-8 md:p-12 relative bg-black bg-opacity-50 backdrop-blur-sm border-4 border-white border-opacity-50">
          <h3 className="font-bold text-3xl sm:text-4xl text-center mb-4 ">
            🎉
            <span className="bg-clip-text text-transparent bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))]"> You're almost in!</span>
          </h3>
          <p className="text-xl sm:text-2xl text-center mb-6 font-semibold">Don't Miss Out on This Opportunity! 🚀</p>
          <p className="text-base sm:text-base mb-4">
            You're one step away from transforming the way you study! By joining our waitlist, you'll not only be among the first to experience our revolutionary flashcard tool for Notion, but you'll also lock in an exclusive 25% discount when we launch!
          </p>
          <p className="text-2xl sm:text-xl font-semibold mb-2">Why join the waitlist?</p>
          <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
            <li> <strong className="text-lg">🚀 Early Access:</strong> Be the first to supercharge your Notion workspace.</li>
            <li> <strong className="text-lg">💰 Exclusive Discount:</strong> Secure 25% off just for signing up!</li>
            <li> <strong className="text-lg">🧠 Maximize Your Learning:</strong> Get a head start on using our tool to boost retention and study smarter, not harder.</li>
          </ul>
          <p className="text-2xl sm:text-base font-semibold mb-4">This is your chance to level up your study game—don't miss it!</p>
          <p className="text-base sm:text-lg text-center mb-6">To proceed, please fill out the form below. If you have any questions, feel free to reach out to us.</p>
          <IframeComponent />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form> 
      </dialog>
    </motion.section>
  )
}

export default Problem