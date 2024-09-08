import React from 'react'
import IframeComponent from './iFrameWaitList';

const Versus = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          Our Solution vs. Quizlet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
            <ul className="space-y-2 text-gray-200 text-lg">
              <li>✅ Seamlessly integrates with Notion</li>
              <li>✅ Create flashcards directly from your notes</li>
              <li>✅ No need to switch between apps</li>
              <li>✅ Customized learning experience</li>
              <li>✅ Interactive embedded flashcards</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">Quizlet</h3>
            <ul className="space-y-2 text-gray-200 text-lg">
              <li>❌ Separate platform from your notes</li>
              <li>❌ Manual creation of flashcards</li>
              <li>❌ Requires switching between apps</li>
              <li>✅ Variety of study modes</li>
              <li>❌ Limited integration with note-taking apps</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
          <button className="px-9 py-5 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 bg-[length:100%_100%] bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))] hover:bg-[linear-gradient(45deg,theme(colors.purple.600),theme(colors.yellow.600))]"
          onClick={()=>document.getElementById('cta2').showModal()}>
            <p className="text-white font-semibold text-xl">
                Take your learning to the next level
            </p>
          </button>
        </div>
        <dialog id="cta2" className="modal">
            <div className="modal-box w-11/12 max-w-4xl p-6 sm:p-8 md:p-12">
                <h3 className="font-bold text-2xl sm:text-3xl text-center mb-4">
                  🎉
                  <span className="bg-clip-text text-transparent bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))]">You're almost in!</span>
                </h3>
                <p className="text-lg sm:text-xl text-center mb-6">Don't Miss Out on This Opportunity! 🚀</p>
                <p className="text-sm sm:text-base mb-4">
                    You're one step away from transforming the way you study! By joining our waitlist, you'll not only be among the first to experience our revolutionary flashcard tool for Notion, but you'll also lock in an exclusive [X%] discount when we launch!
                </p>
                <p className="text-sm sm:text-base font-semibold mb-2">Why join the waitlist?</p>
                <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
                    <li> <strong>Early Access:</strong> Be the first to supercharge your Notion workspace.</li>
                    <li> <strong>Exclusive Discount:</strong> Secure [X%] off just for signing up!</li>
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

export default Versus