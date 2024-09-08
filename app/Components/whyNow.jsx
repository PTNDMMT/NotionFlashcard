import React from 'react'
import IframeComponent from './iFrameWaitList';

const whyNow = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Why Act Now:
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          This is your chance to revolutionize your study process with an offer that’s too good to miss. Imagine the ease of transforming your notes into interactive flashcards and the boost in your learning efficiency.
        </p>
        <p className="text-lg sm:text-xl mb-8">
          Don’t wait—experience the ultimate study tool today and make your learning journey smarter and more enjoyable.
        </p>
        <div className="text-xl sm:text-2xl font-semibold mb-8">
          <span className="text-yellow-500">Exclusive Discount:</span> Join the waitlist and receive <span className="text-yellow-500">[X%]</span> off your first subscription!
        </div>
        <button className="px-9 py-5 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 bg-[length:100%_100%] bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))] hover:bg-[linear-gradient(45deg,theme(colors.purple.600),theme(colors.yellow.600))]"
        onClick={()=>document.getElementById('cta3').showModal()}>
          <p className="text-white font-semibold text-xl">
              Join the Waitlist
          </p>
        </button>
      </div>

      <dialog id="cta3" className="modal">
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

export default whyNow