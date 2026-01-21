"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import { FlipWords } from "./ui/FlipWords";
import { Spotlight } from "./ui/Spotlight";

// ============= CIRCULAR TEXT COMPONENT =============
function CircleText() {
  const text = "DEVELOPER • AVAILABLE • CREATIVE • BUILDING • BIHI •";

  return (
    <motion.div
      className="relative w-[130px] h-[130px] md:w-[150px] md:h-[150px]"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
            fill="none"
          />
        </defs>
        <text
          fill="currentColor"
          className="text-muted"
          style={{
            fontSize: "8px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center accent dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-3 h-3 rounded-full bg-accent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}

// ============= FLOATING VISUAL COMPONENT =============
function HeroVisual() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Glow behind the card */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(255,77,77,0.8) 0%, transparent 20%)",
          filter: "blur(120px)",
        }}
      />

      {/* Main floating card */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="relative w-[320px] md:w-[380px] rounded-2xl overflow-hidden"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05) inset",
          }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex justify-center">
              <span className="text-[10px] text-muted font-mono">
                ~/brahim-bouargane
              </span>
            </div>
            <Terminal size={12} className="text-muted" />
          </div>

          {/* Terminal content */}
          <div className="p-5 font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="text-accent">→</span>
                <span className="text-muted">const</span>
                <span className="text-foreground">developer</span>
                <span className="text-muted">=</span>
                <span className="text-accent">{"{"}</span>
              </div>

              {[
                { key: "name", value: '"Brahim Bouargane"', delay: 1.3 },
                { key: "role", value: '"Full Stack Developer"', delay: 1.4 },
                { key: "location", value: '"Casablanca, Morocco"', delay: 1.5 },
              ].map((item) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay }}
                  className="pl-6 flex gap-2"
                >
                  <span className="text-purple-400">{item.key}:</span>
                  <span className="text-green-400">{item.value},</span>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="pl-6"
              >
                <span className="text-purple-400">skills:</span>
                <span className="text-accent"> [</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 }}
                className="pl-10 text-green-400 text-xs"
              >
                'React', 'Next.js', 'TypeScript',
                <br />
                'Node.js', 'PostgreSQL', 'MongoDB'
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="pl-6"
              >
                <span className="text-accent">]</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9 }}
              >
                <span className="text-accent">{"}"}</span>
                <span className="text-muted">;</span>
              </motion.div>

              {/* Blinking cursor */}
              <motion.div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                <span className="text-accent">→</span>
                <span className="text-green-400">ready_to_collaborate</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2 h-4 bg-accent"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div
          className="absolute -top-4 -left-8 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{
            background: "rgba(97, 218, 251, 0.1)",
            border: "1px solid rgba(97, 218, 251, 0.3)",
            color: "#61DAFB",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            delay: 2,
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          React
        </motion.div>

        <motion.div
          className="absolute -top-2 -right-6 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{
            background: "rgba(49, 120, 198, 0.1)",
            border: "1px solid rgba(49, 120, 198, 0.3)",
            color: "#3178C6",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            delay: 2.2,
            duration: 4,
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          TypeScript
        </motion.div>

        <motion.div
          className="absolute -bottom-3 -left-6 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{
            background: "rgba(51, 153, 51, 0.1)",
            border: "1px solid rgba(51, 153, 51, 0.3)",
            color: "#339933",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, 5, 0] }}
          transition={{
            delay: 2.4,
            duration: 3.5,
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          Node.js
        </motion.div>

        <motion.div
          className="absolute -bottom-5 -right-4 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-foreground"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, 6, 0] }}
          transition={{
            delay: 2.6,
            duration: 4.5,
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          Next.js
        </motion.div>
      </motion.div>
    </div>
  );
}

// ============= MAIN HERO COMPONENT =============
export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) * 100);
      mouseY.set((clientY / innerHeight) * 100);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen relative flex flex-col overflow-hidden bg-background"
    >
      {/* ============= BACKGROUND ============= */}
      <div className="absolute inset-0">
        {/* Spotlight */}
        <Spotlight
          className="-top-40 -left-10 md:left-40 md:-top-20 h-[180vh] w-[180vw]"
          fill="rgba(255,77,77,0.9)"
        />

        {/* Mesh gradient */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute top-0 left-[20%] w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,77,77,0.35) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-0 right-[10%] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(120,80,255,0.25) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        {/* Mouse follower */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(255,77,77,0.2) 0%, transparent 60%)",
            filter: "blur(60px)",
            left: smoothMouseX,
            top: smoothMouseY,
            x: "-50%",
            y: "-50%",
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ============= DECORATIVE ELEMENTS ============= */}
      {/* Top left corner */}
      <div className="absolute top-8 left-8 hidden lg:block">
        <motion.div
          className="w-20 h-px bg-gradient-to-r from-accent/60 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-accent/60 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />
      </div>

      {/* Bottom right corner */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <motion.div
          className="w-20 h-px bg-gradient-to-l from-accent/60 to-transparent ml-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.div
          className="w-px h-20 bg-gradient-to-t from-accent/60 to-transparent ml-auto"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </div>

      {/* Side accent lines */}
      <motion.div
        className="absolute top-[25%] left-0 h-[200px] w-px hidden lg:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,77,77,0.5), transparent)",
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* ============= MAIN CONTENT ============= */}
      <motion.div
        style={{ y, opacity }}
        className="flex-1 flex flex-col justify-center relative z-10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          {/* Top bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted font-light">
                Available for projects
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-6 text-xs text-muted"
            >
              <span className="font-mono tracking-wider">{currentTime}</span>
              <span className="w-px h-3 bg-border" />
              <span className="tracking-wide">Casablanca, Morocco</span>
            </motion.div>
          </div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left column - Text */}
            <div>
              {/* Main heading */}
              <div className="relative mb-8">
                <div
                  className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[250px] opacity-30 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(255,77,77,0.4) 0%, transparent 70%)",
                    filter: "blur(50px)",
                  }}
                />

                <div className="flex items-center gap-6">
                  <h1 className="relative flex-1">
                    {isLoaded && (
                      <>
                        <div className="overflow-hidden">
                          <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{
                              duration: 1,
                              delay: 0.4,
                              ease: [0.215, 0.61, 0.355, 1],
                            }}
                            className="text-[14vw] md:text-[8vw] lg:text-[5.5vw] font-display font-bold leading-[1] tracking-tight"
                          >
                            <span className="text-foreground">Creative</span>

                            {/* Circular rotating text */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                              animate={
                                isLoaded
                                  ? { opacity: 1, scale: 1, rotate: 0 }
                                  : {}
                              }
                              transition={{ duration: 1, delay: 1.2 }}
                              className="hidden md:inline-block "
                            >
                              <CircleText />
                            </motion.div>
                          </motion.div>
                        </div>

                        <div className="overflow-hidden">
                          <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{
                              duration: 1,
                              delay: 0.5,
                              ease: [0.215, 0.61, 0.355, 1],
                            }}
                            className="text-[14vw] md:text-[8vw] lg:text-[5.5vw] font-display font-bold leading-[1.1] tracking-tight flex items-center gap-3"
                          >
                            <span className="text-accent">&lt;</span>
                            <FlipWords
                              words={[
                                "Developer",
                                "Engineer",
                                "Creator",
                                "Builder",
                              ]}
                              duration={2500}
                              className="text-foreground"
                            />
                            <span className="text-accent">/&gt;</span>
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1 }}
                          className="mt-4 flex items-center gap-4"
                        >
                          <motion.span
                            className="w-10 h-[2px] bg-accent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            style={{ transformOrigin: "left" }}
                          />
                          <span className="text-muted text-sm tracking-wide">
                            Full Stack Developer
                          </span>
                        </motion.div>
                      </>
                    )}
                  </h1>
                </div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-md"
              >
                I craft{" "}
                <span className="text-foreground font-medium">
                  pixel-perfect
                </span>{" "}
                interfaces and{" "}
                <span className="text-foreground font-medium">scalable</span>{" "}
                backend systems. Turning complex problems into{" "}
                <span className="text-accent font-medium">
                  elegant solutions
                </span>
                .
              </motion.p>

              {/* CTA and Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 overflow-hidden rounded-full border border-border hover:border-accent transition-all duration-300"
                  >
                    <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      View Projects
                    </span>
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <ArrowDown
                        size={12}
                        className="text-accent group-hover:text-white transition-colors sm:w-3.5 sm:h-3.5"
                      />
                    </span>
                  </a>

                  <a
                    href="/cv.pdf"
                    download
                    className="group relative inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-white rounded-full font-medium text-xs sm:text-sm overflow-hidden hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
                  >
                    <Download size={14} className="sm:w-4 sm:h-4" />
                    <span>Download CV</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                  </a>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-2 sm:ml-2">
                  <a
                    href="https://github.com/brahimbouargane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    <Github
                      size={14}
                      className="text-muted group-hover:text-accent transition-colors sm:w-4 sm:h-4"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/brahim-bouargane/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    <Linkedin
                      size={14}
                      className="text-muted group-hover:text-accent transition-colors sm:w-4 sm:h-4"
                    />
                  </a>
                  <a
                    href="mailto:brahim.bouargane2000@gmail.com"
                    className="group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    <Mail
                      size={14}
                      className="text-muted group-hover:text-accent transition-colors sm:w-4 sm:h-4"
                    />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="hidden lg:block"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ============= SCROLL INDICATOR ============= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] uppercase tracking-[0.3em] text-muted font-light"
        >
          Scroll
        </motion.span>
        <div className="w-[1px] h-12 relative overflow-hidden bg-border/30">
          <motion.div
            className="absolute top-0 left-0 w-full bg-accent"
            initial={{ height: "0%" }}
            animate={{ height: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Side text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <p
          className="text-[10px] uppercase tracking-[0.4em] text-muted/40 font-light"
          style={{ writingMode: "vertical-rl" }}
        >
          Portfolio 2024 — Brahim Bouargane
        </p>
      </motion.div>
    </section>
  );
}
