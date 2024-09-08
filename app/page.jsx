import Image from "next/image";
import Hero from "./Components/hero";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#050520] to-[#0a0a40]">
      <Navbar />
      <Hero />
    </div>
  );
}
