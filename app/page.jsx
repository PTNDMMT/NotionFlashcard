"use client";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollY } = useScroll();

  // Parallax effect for Problem (page moves up)
  const yProblem = useTransform(scrollY, [0, 0], [0, 0]);

  // Normal scroll for Solution onwards
  const ySolution = useTransform(scrollY, [600, 1500], [0, 0]);

  return (
    <div className="bg-gradient-to-r from-[#050520] to-[#0a0a40] overflow-hidden">
      <Navbar />
      <Hero />
      
      {/* Problem section with inverse parallax */}
      <motion.div style={{ y: yProblem }}>
        <Problem />
      </motion.div>
      
      {/* Solution section with normal scrolling */}
      <motion.div
        className="bg-gradient-to-r from-[#1a1a60] to-[#2a2a80] rounded-[45px]"
        style={{ y: ySolution }}
      >
        <Solution />
        <Versus />
        <WhyThis />
        <WhyNow />
        <AboutUs />
      </motion.div>
      
      <Footer />
    </div>
  );
}
