"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen relative flex items-center overflow-hidden"
    >
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-32"
      >
        {/* Top line with location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-6 mb-12"
        >
          <div className="h-[1px] w-16 bg-stone" />
          <div className="flex items-center gap-2 text-charcoal/60 font-body text-sm tracking-wide">
            <MapPin size={14} />
            <span>Casablanca, Morocco</span>
          </div>
        </motion.div>

        {/* Main title */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="font-display text-hero font-medium text-ink tracking-tight">
              Brahim
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden flex items-baseline gap-6"
          >
            <h1 className="font-display text-hero font-medium text-ink tracking-tight italic h-20 md:h-52">
              Bouargane
            </h1>
            <motion.span
              initial={{ width: 0 }}
              animate={isLoaded ? { width: "100px" } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-[2px] bg-terracotta hidden md:block"
            />
          </motion.div>
        </div>

        {/* Subtitle and description */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
              Fullstack Developer
            </p>
            <p className="text-charcoal/70 font-body text-lg leading-relaxed">
              I craft{" "}
              <span className="text-ink font-medium">
                thoughtful digital experiences
              </span>{" "}
              and{" "}
              <span className="text-ink font-medium">robust applications</span>{" "}
              with a focus on elegant solutions and meticulous attention to
              detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col justify-end"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-olive" />
              </span>
              <span className="text-sm text-charcoal/60 font-body">
                Available for new projects
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="btn-primary inline-flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Work</span>
                <ArrowDown size={14} />
              </motion.a>

              <motion.a
                href="/brahim_bouargane_resume.pdf"
                download
                className="btn-outline inline-flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={14} />
                <span>Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-charcoal/40 font-body">
            Connect
          </span>
          <div className="h-[1px] w-8 bg-stone" />
          {[
            {
              icon: Github,
              href: "https://github.com/brahimbouargane",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/brahim-bouargane/",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:brahim.bouargane2000@gmail.com",
              label: "Email",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.icon !== Mail ? "_blank" : undefined}
              rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-center w-10 h-10 border border-stone/50 hover:border-terracotta hover:bg-terracotta transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon
                size={16}
                className="text-charcoal/60 group-hover:text-white transition-colors"
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40 font-mono"
        >
          Scroll
        </motion.span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone to-transparent" />
      </motion.div>

      {/* Corner decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-8 right-8 hidden lg:block"
      >
        <div className="w-20 h-20 border border-stone/30" />
        <div className="w-20 h-20 border border-terracotta/30 -mt-16 ml-4" />
      </motion.div>
    </section>
  );
}
