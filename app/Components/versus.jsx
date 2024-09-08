import React from 'react'

const Versus = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          Our Solution vs. Quizlet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">Our Solution</h3>
            <ul className="space-y-2 text-gray-200">
              <li>✅ Seamlessly integrates with Notion</li>
              <li>✅ Create flashcards directly from your notes</li>
              <li>✅ No need to switch between apps</li>
              <li>✅ Customized learning experience</li>
              <li>✅ Interactive embedded flashcards</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Quizlet</h3>
            <ul className="space-y-2 text-gray-200">
              <li>❌ Separate platform from your notes</li>
              <li>❌ Manual creation of flashcards</li>
              <li>❌ Requires switching between apps</li>
              <li>✅ Variety of study modes</li>
              <li>❌ Limited integration with note-taking apps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Versus