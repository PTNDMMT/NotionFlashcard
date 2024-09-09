"use client"
import React, { useState, useEffect } from 'react'
import IframeComponent from './iFrameWaitList';
import Confetti from 'react-confetti';

const WhyNow = () => {
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
    document.getElementById('cta3').showModal();
    setTimeout(() => setIsConfettiActive(false), 10000); // Confetti lasts for 10 seconds
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 text-white relative">
      {isConfettiActive && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={1000}
          gravity={0.2}
          wind={0.05}
          colors={['#FF00FF', '#00FFFF', '#FFFF00', '#FF0000', '#00FF00', '#0000FF']}
          confettiSource={{x: 0, y: 0, w: windowSize.width, h: 0}}
        />
      )}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Why Act Now:
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          This is your chance to revolutionize your study process with an offer that's too good to miss. Imagine the ease of transforming your notes into interactive flashcards and the boost in your learning efficiency.
        </p>
        <p className="text-lg sm:text-xl mb-8">
          Don't wait—experience the ultimate study tool today and make your learning journey smarter and more enjoyable.
        </p>
        <div className="text-xl sm:text-2xl font-semibold mb-8">
          <span className="text-yellow-500">Exclusive Discount:</span> Join the waitlist and receive <span className="text-yellow-500">25%</span> off your first subscription!
        </div>
        <button 
          className="px-9 py-5 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 bg-[length:100%_100%] bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))] hover:bg-[linear-gradient(45deg,theme(colors.purple.600),theme(colors.yellow.600))]"
          onClick={handleButtonClick}
        >
          <p className="text-white font-semibold text-xl">
              Join the Waitlist
          </p>
        </button>
      </div>

      <dialog id="cta3" className="modal">
        <div className="modal-box w-11/12 max-w-4xl p-6 sm:p-8 md:p-12">
          <h3 className="font-bold text-2xl sm:text-3xl text-center mb-4">
            🎉
            <span className="bg-clip-text text-transparent bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))]"> You're almost in!</span>
          </h3>
          <p className="text-lg sm:text-xl text-center mb-6">Don't Miss Out on This Opportunity! 🚀</p>
          <p className="text-sm sm:text-base mb-4">
            You're one step away from transforming the way you study! By joining our waitlist, you'll not only be among the first to experience our revolutionary flashcard tool for Notion, but you'll also lock in an exclusive 25% discount when we launch!
          </p>
          <p className="text-sm sm:text-base font-semibold mb-2">Why join the waitlist?</p>
          <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
            <li> <strong>Early Access:</strong> Be the first to supercharge your Notion workspace.</li>
            <li> <strong>Exclusive Discount:</strong> Secure 25% off just for signing up!</li>
            <li> <strong>Maximize Your Learning:</strong> Get a head start on using our tool to boost retention and study smarter, not harder.</li>
          </ul>
          <p className="text-sm sm:text-base font-semibold mb-4">This is your chance to level up your study game—don't miss it!</p>
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

export default WhyNow