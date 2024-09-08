import React from 'react'

const Problem = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 mb-16" id="problem">
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
          <button className="px-9 py-5 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 bg-[length:100%_100%] bg-[linear-gradient(45deg,theme(colors.purple.500),theme(colors.yellow.500))] hover:bg-[linear-gradient(45deg,theme(colors.purple.600),theme(colors.yellow.600))]">
            <p className="text-white font-semibold text-xl">
                Take your learning to the next level
            </p>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Problem