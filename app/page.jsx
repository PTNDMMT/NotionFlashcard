import Image from "next/image";
import Hero from "./Components/hero";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#050520] to-[#0a0a40] overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob backdrop-filter backdrop-blur-lg"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-2000 backdrop-filter backdrop-blur-lg"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000 backdrop-filter backdrop-blur-lg"></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
