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
            <div className="modal-box p-8">
                <h3 className="font-bold text-2xl text-center mb-4">🎉 You're almost in!</h3>
                <p className="text-lg text-center mb-8">To proceed, please fill out the form below. If you have any questions, feel free to reach out to us.</p>
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