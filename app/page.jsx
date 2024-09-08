"use client"
import Hero from "./Components/hero";
import Navbar from "./Components/navbar";
import Problem from "./Components/problem";
import Solution from "./Components/solution";
import Versus from "./Components/versus";
import { useRef, useState } from 'react';

export default function HomePage() {
  const solutionRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#050520] to-[#0a0a40] overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Problem />
        <div className="from-blue-900/30 to-purple-900/30 backdrop-blur-lg">
          <Solution />
          <Versus />
        </div>
      </div>
    </div>
  );
}
