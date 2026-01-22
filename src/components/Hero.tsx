"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { MagneticElement } from "./gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const lastNameRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);

  useEffect(() => {
    setIsLoaded(true);

    // GSAP text animation for the name
    const ctx = gsap.context(() => {
      // Animate first name characters
      if (nameRef.current) {
        const chars = nameRef.current.textContent?.split("") || [];
        nameRef.current.innerHTML = chars
          .map(
            (char) =>
              `<span class="inline-block opacity-0 translate-y-full">${char}</span>`
          )
          .join("");

        gsap.to(nameRef.current.querySelectorAll("span"), {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          delay: 0.5,
        });
      }

      // Animate last name characters
      if (lastNameRef.current) {
        const chars = lastNameRef.current.textContent?.split("") || [];
        lastNameRef.current.innerHTML = chars
          .map(
            (char) =>
              `<span class="inline-block opacity-0 translate-y-full">${char}</span>`
          )
          .join("");

        gsap.to(lastNameRef.current.querySelectorAll("span"), {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          delay: 0.7,
        });
      }

      // Animate the accent line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { width: 0 },
          { width: "100px", duration: 0.8, ease: "power3.out", delay: 1.2 }
        );
      }
    });

    return () => ctx.revert();
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

        {/* Main title with GSAP character animation */}
        <div className="mb-12">
          <div className="overflow-hidden">
            <h1
              ref={nameRef}
              className="font-display text-hero font-medium text-ink tracking-tight"
            >
              Brahim
            </h1>
          </div>

          <div className="overflow-hidden flex items-baseline gap-6">
            <h1
              ref={lastNameRef}
              className="font-display text-hero font-medium text-ink tracking-tight italic h-20 md:h-52"
            >
              Bouargane
            </h1>
            <span
              ref={lineRef}
              className="h-[2px] bg-terracotta hidden md:block"
              style={{ width: 0 }}
            />
          </div>
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

            {/* CTA Buttons with Magnetic Effect */}
            <div className="flex flex-wrap gap-4">
              <MagneticElement strength={0.2}>
                <a
                  href="#projects"
                  className="btn-primary inline-flex items-center gap-3"
                >
                  <span>View Work</span>
                  <ArrowDown size={14} />
                </a>
              </MagneticElement>

              <MagneticElement strength={0.2}>
                <a
                  href="/brahim_bouargane_resume.pdf"
                  download
                  className="btn-outline inline-flex items-center gap-3"
                >
                  <Download size={14} />
                  <span>Resume</span>
                </a>
              </MagneticElement>
            </div>
          </motion.div>
        </div>

        {/* Social links with Magnetic Effect */}
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
            <MagneticElement key={social.label} strength={0.3}>
              <a
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-center w-10 h-10 border border-stone/50 hover:border-terracotta hover:bg-terracotta transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon
                  size={16}
                  className="text-charcoal/60 group-hover:text-white transition-colors"
                />
              </a>
            </MagneticElement>
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
