import React from 'react'

const Solution = () => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative" id="solution">
      <div className="max-w-6xl mx-auto relative z-10 flex flex-wrap justify-center gap-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          Why Our Solution is Perfect for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
          <div className="bg-white/10 max-w-xl rounded-xl p-6 backdrop-blur-sm border border-white/10 transform transition duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-2xl font-semibold text-blue-300">Seamless Integration</h3>
            </div>
            <p className="text-gray-200">
              Our tool works directly within Notion, eliminating the need for switching between apps or manual data entry. Simply write your flashcards using a table format and let our tool handle the transformation.
            </p>
          </div>

          <div className="bg-white/10 max-w-xl rounded-xl p-6 backdrop-blur-sm border border-white/10 transform transition duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <h3 className="text-2xl font-semibold text-green-300">Effortless Conversion</h3>
            </div>
            <p className="text-gray-200">
              Turn your Notion notes into interactive flashcards with just a few clicks. No additional software or complex steps required, saving you time and effort.
            </p>
          </div>

          <div className="bg-white/10 max-w-xl rounded-xl p-6 backdrop-blur-sm border border-white/10 transform transition duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-2xl font-semibold text-yellow-300">Enhanced Learning</h3>
            </div>
            <p className="text-gray-200">
              Our interactive flashcards boost retention and engagement with features like spaced repetition and customizable quiz formats, tailored to your study needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center mt-8">
          <div className="bg-white/10 max-w-xl rounded-xl p-6 backdrop-blur-sm border border-white/10 transform transition duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="text-2xl font-semibold text-pink-300">All-in-One Solution</h3>
            </div>
            <p className="text-gray-200">
              Our platform integrates everything into one cohesive solution, allowing you to create and embed flashcards directly in Notion, streamlining your study routine.
            </p>
          </div>

          <div className="bg-white/10 max-w-xl rounded-xl p-6 backdrop-blur-sm border border-white/10 transform transition duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-2xl font-semibold text-purple-300">Proven Effectiveness</h3>
            </div>
            <p className="text-gray-200">
              We use techniques backed by educational research to enhance memory retention and learning outcomes, making studying more interactive and effective.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Solution