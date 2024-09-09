import React from 'react'

const notionExample = () => {
  return (
    <div className="bg-slate-800 rounded-lg p-4 shadow-md">
            <div className="flex flex-col">
              <div className="mb-4">
                <TypeAnimation
                  sequence={[
                    'term == Definition',
                    1000,
                    '',
                    500,
                    'flashcard == The best study tool',
                    1000,
                    '',
                    500,
                    'notecard == Memory Aid',
                    1000,
                    '',
                    500,
                    'quizlet == Ugly flashcard App',
                    1000,
                    '',
                    500,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={0}
                  style={{ fontSize: '1.5em', color: 'black' }}
                />
              </div>
              <div className="mt-8 flex justify-center">
                <div 
                  className="w-64 h-40 cursor-pointer [perspective:1000px]"
                  onClick={handleFlip}
                >
                  <div 
                    className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                      isFlipped ? '[transform:rotateY(180deg)]' : ''
                    }`}
                  >
                    <div className="absolute w-full h-full backface-hidden bg-purple-500 rounded-lg flex items-center justify-center p-4" 
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <p className="text-white text-xl font-semibold">{flashcards[currentCardIndex].term}</p>
                    </div>
                    <div className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-yellow-500 rounded-lg flex items-center justify-center p-4" 
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <p className="text-white text-xl font-semibold">{flashcards[currentCardIndex].definition}</p>
                    </div>
                  </div>
                </div>
              </div>
                <div className="mt-8 flex justify-center space-x-4">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handlePreviousCard}
                  >
                    Non capito
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleNextCard}
                  >
                    Capito
                  </button>
                </div>
            </div>
          </div>
  )
}

export default notionExample