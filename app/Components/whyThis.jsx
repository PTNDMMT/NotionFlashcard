import React from 'react'

const whyThis = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 rounded-3xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Unlock Your Learning Potential:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <svg className="w-8 h-8 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <strong className="text-lg">Solve Your Study Struggles</strong>End the frustration of juggling multiple tools and ineffective study methods.
            </div>
          </div>
          <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <svg className="w-8 h-8 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              <strong className="text-lg">Maximize Your Learning</strong>Leverage proven techniques to remember more and study smarter.
            </div>
          </div>
          <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <svg className="w-8 h-8 mr-2 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              <strong className="text-lg">Save Time and Effort</strong>Enjoy a streamlined process that simplifies your study routine.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default whyThis