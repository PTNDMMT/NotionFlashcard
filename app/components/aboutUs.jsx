import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import us from '../assets/us.png'

const AboutUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-white border-opacity-20">
              <Image
                src={us}
                alt="Gabriele and Luca"
                className="rounded-3xl w-64"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Hi, we are Gabriele and Luca
            </h3>
            <p className="text-gray-300 text-lg">
              We are both from Apulia, Italy. We met in high school and shared a passion for coding and business. We became friends and talked about teenager's shit, but with time we saw that entrepreneurship, coding, and marketing were exciting to us.
            </p>
            <p className="text-gray-300 text-lg">
              So in 2024, we chose to start a path together, we decided to build in public our Saas. And here we are! The first one we built is Crammate, we still don't know how it will go or what we will build next, but we know this will be a fun journey made of errors and lessons.
            </p>
            <p className="text-gray-300 text-lg">
              If you want to follow our journey you can follow us on Instagram.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://www.instagram.com/landriluca_/" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Follow Luca
              </Link>
              <Link href="https://www.instagram.com/squeogabriele/" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Follow Gabriele
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs