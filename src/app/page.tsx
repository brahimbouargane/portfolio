"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SkillsMarquee from "@/components/gsap/SkillsMarquee";

// Dynamically import the 3D scene with no SSR
const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => <div className="canvas-container bg-ivory dark:bg-ivory" />,
});

// Dynamically import the cursor follower (desktop only)
const CursorFollower = dynamic(
  () => import("@/components/gsap/CursorFollower"),
  { ssr: false }
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Simple loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Custom Cursor (Desktop only) */}
      {!isLoading && <CursorFollower />}

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center"
          >
            <span className="font-display text-4xl font-bold text-ivory mb-8">
              B<span className="text-terracotta">.</span>
            </span>
            <div className="w-48 h-1 bg-ivory/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-terracotta to-gold rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
            <p className="mt-6 text-sm text-ivory/40 font-mono">
              Loading...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Background Scene */}
      {!isLoading && <Scene3D />}

      {/* Main Content Overlay */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 noise"
      >
        <Navigation />

        {/* Scrollable Content */}
        <div className="scroll-container">
          <Hero />
          <SkillsMarquee />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </motion.main>
    </>
  );
}
