"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { TextScramble } from "./TextScramble";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/brahimbouargane", handle: "@brahimbouargane" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/brahim-bouargane/", handle: "in/brahim-bouargane" },
];

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [copied, setCopied] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  // Mouse position for email hover effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const email = "brahim.bouargane2000@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section id="contact" ref={containerRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent font-mono block mb-4 sm:mb-6"
          >
            // Contact
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-display-lg lg:text-display-xl font-display font-bold text-foreground"
          >
            Let&apos;s Create
            <br />
            <span className="text-stroke text-foreground">Something Great</span>
          </motion.h2>
        </div>

        {/* Email CTA - Large Interactive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-16 md:mb-24"
        >
          <a
            href={`mailto:${email}`}
            className="group relative block py-8 sm:py-12 md:py-20 border-y border-border hover:border-accent transition-colors overflow-hidden"
            onMouseMove={handleEmailMouseMove}
            onMouseEnter={() => setIsEmailHovered(true)}
            onMouseLeave={() => setIsEmailHovered(false)}
          >
            {/* Hover Background */}
            <motion.div
              className="absolute inset-0 bg-accent/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: isEmailHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Cursor Follower */}
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-accent/10 blur-3xl pointer-events-none hidden md:block"
              style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{ scale: isEmailHovered ? 1.5 : 0 }}
              transition={{ duration: 0.4 }}
            />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted mb-1 sm:mb-2">Send me an email</p>
                  <p className="text-base sm:text-xl md:text-3xl lg:text-4xl font-display font-bold text-foreground group-hover:text-accent transition-colors break-all sm:break-normal">
                    {isInView && <TextScramble text={email} delay={800} />}
                  </p>
                </div>
              </div>

              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all flex-shrink-0"
                animate={{ rotate: isEmailHovered ? 45 : 0 }}
              >
                <ArrowUpRight
                  size={18}
                  className="text-foreground group-hover:text-white transition-colors sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </motion.div>
            </div>
          </a>

          {/* Copy Button */}
          <motion.button
            onClick={copyEmail}
            className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm text-muted hover:text-foreground transition-colors mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? (
              <>
                <Check size={14} className="text-green-500 sm:w-4 sm:h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} className="sm:w-4 sm:h-4" />
                <span>Copy email address</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-4 sm:p-6 md:p-8 border border-border rounded-xl sm:rounded-2xl hover:border-accent/50 transition-colors"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted block mb-2 sm:mb-4 font-mono">
              Location
            </span>
            <p className="text-base sm:text-lg md:text-xl font-display font-bold text-foreground">
              Casablanca
            </p>
            <p className="text-xs sm:text-sm text-muted">Morocco</p>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-4 sm:p-6 md:p-8 border border-border rounded-xl sm:rounded-2xl hover:border-accent/50 transition-colors"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted block mb-2 sm:mb-4 font-mono">
              Availability
            </span>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
              </span>
              <p className="text-base sm:text-lg md:text-xl font-display font-bold text-foreground">
                Available
              </p>
            </div>
            <p className="text-xs sm:text-sm text-muted">For new projects</p>
          </motion.div>

          {/* Social Links */}
          {socialLinks.slice(0, 2).map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group p-4 sm:p-6 md:p-8 border border-border rounded-xl sm:rounded-2xl hover:border-accent transition-colors"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted font-mono">
                  {link.name}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all sm:w-4 sm:h-4"
                />
              </div>
              <p className="text-sm sm:text-base md:text-xl font-display font-bold text-foreground group-hover:text-accent transition-colors truncate">
                {link.handle}
              </p>
            </motion.a>
          ))}
        </div>

        {/* More Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-10 sm:mt-12 md:mt-16"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-border rounded-full hover:border-accent hover:bg-accent/5 transition-all text-sm sm:text-base"
            >
              <span className="font-medium text-foreground">{link.name}</span>
              <ArrowUpRight
                size={14}
                className="text-muted group-hover:text-accent transition-colors sm:w-4 sm:h-4"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
