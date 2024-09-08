"use client"
import Hero from "./Components/hero";
import Navbar from "./Components/navbar";
import Problem from "./Components/problem";
import Solution from "./Components/solution";
import Versus from "./Components/versus";
import WhyNow from "./Components/whyNow";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#050520] to-[#0a0a40] overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Problem />
        <div className="bg-gradient-to-r from-[#1a1a60] to-[#2a2a80] rounded-2xl">
          <Solution />
          <Versus />
          <WhyNow />
        </div>
      </div>
    </div>
  );
}
