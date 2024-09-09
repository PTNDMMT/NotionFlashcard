import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Versus from "./components/versus";
import WhyNow from "./components/whyNow";
import WhyThis from "./components/whyThis";
import Footer from "./components/footer";
import AboutUs from "./components/aboutUs";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-[#050520] to-[#0a0a40] overflow-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <div className="bg-gradient-to-r from-[#1a1a60] to-[#2a2a80] rounded-[45px]">
        <Solution />
        <Versus />
        <WhyThis />
        <WhyNow />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}
