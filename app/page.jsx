import Image from "next/image";
import Hero from "./Components/hero";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600">
      <Navbar />
      <Hero />
    </div>
  );
}
