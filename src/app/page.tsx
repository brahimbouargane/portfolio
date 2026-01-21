"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <SmoothScroll>
        <main className="relative grain">
          {/* Custom Cursor - Desktop only, dark mode only */}
          <div className="hidden md:block">
            <CustomCursor />
          </div>

          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
