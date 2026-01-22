"use client";

import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [copied, setCopied] = useState(false);

  const email = "brahim.bouargane2000@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/brahimbouargane",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/brahim-bouargane/",
      icon: Linkedin,
    },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="min-h-screen relative py-32 bg-cream dark:bg-cream overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-12 gap-8 mb-20"
        >
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <motion.span
                className="font-mono text-xs text-terracotta tracking-wider"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                04
              </motion.span>
              <motion.div
                className="h-[1px] flex-1 bg-stone origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <h2 className="font-display text-display-lg font-medium text-ink">
              Get In Touch
            </h2>
          </div>

          <motion.div
            className="md:col-span-8 md:pt-12"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-charcoal/70 font-body text-xl leading-relaxed max-w-2xl">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s
              collaborate and bring your vision to life.
            </p>
          </motion.div>
        </motion.div>

        {/* Email CTA */}
        <motion.div variants={cardVariants} className="mb-20">
          <a
            href={`mailto:${email}`}
            className="group block p-8 md:p-12 border border-stone hover:border-terracotta bg-ivory dark:bg-sand hover:shadow-editorial-lg transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 border border-stone group-hover:border-terracotta flex items-center justify-center transition-colors">
                  <Mail className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/50 mb-2 font-mono uppercase tracking-wider">
                    Send me an email
                  </p>
                  <p className="text-xl md:text-2xl font-display font-medium text-ink group-hover:text-terracotta transition-colors">
                    {email}
                  </p>
                </div>
              </div>

              <div className="w-14 h-14 border border-stone group-hover:border-terracotta group-hover:bg-terracotta flex items-center justify-center transition-all">
                <ArrowUpRight
                  size={24}
                  className="text-charcoal group-hover:text-white transition-colors"
                />
              </div>
            </div>
          </a>

          {/* Copy button */}
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              copyEmail();
            }}
            className="mt-4 mx-auto flex items-center gap-2 text-sm text-charcoal/50 hover:text-terracotta transition-colors font-body"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {copied ? (
              <>
                <Check size={16} className="text-olive" />
                <span>Copied to clipboard</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy email address</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Info Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {/* Location */}
          <motion.div
            variants={cardVariants}
            className="p-8 border border-stone bg-ivory dark:bg-sand hover:border-terracotta transition-colors"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
            >
              <MapPin className="w-5 h-5 text-terracotta mb-6" />
            </motion.div>
            <p className="font-mono text-xs text-charcoal/50 mb-2 uppercase tracking-wider">
              Location
            </p>
            <p className="font-display text-lg font-medium text-ink">
              Casablanca, Morocco
            </p>
          </motion.div>

          {/* Availability */}
          <motion.div
            variants={cardVariants}
            className="p-8 border border-stone bg-ivory dark:bg-sand hover:border-terracotta transition-colors"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="relative w-5 h-5 mb-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive opacity-75" />
              <span className="relative inline-flex rounded-full w-5 h-5 bg-olive" />
            </div>
            <p className="font-mono text-xs text-charcoal/50 mb-2 uppercase tracking-wider">
              Status
            </p>
            <p className="font-display text-lg font-medium text-ink">
              Available for Work
            </p>
          </motion.div>

          {/* Response time */}
          <motion.div
            variants={cardVariants}
            className="p-8 border border-stone bg-ivory dark:bg-sand hover:border-terracotta transition-colors"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div
              className="w-5 h-5 mb-6 text-terracotta"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </motion.div>
            <p className="font-mono text-xs text-charcoal/50 mb-2 uppercase tracking-wider">
              Response
            </p>
            <p className="font-display text-lg font-medium text-ink">
              Within 24 hours
            </p>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-4 border border-stone hover:border-terracotta bg-ivory dark:bg-sand hover:shadow-editorial transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon
                size={18}
                className="text-charcoal/60 group-hover:text-terracotta transition-colors"
              />
              <span className="font-body text-sm uppercase tracking-wider text-charcoal group-hover:text-ink transition-colors">
                {link.name}
              </span>
              <ArrowUpRight
                size={14}
                className="text-charcoal/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        {/* <motion.div
          variants={itemVariants}
          className="mt-32 pt-8 border-t border-stone"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-charcoal/50 font-body">
              Designed & Built by{" "}
              <span className="text-ink">Brahim Bouargane</span>
            </p>
            <p className="text-xs text-charcoal/40 font-mono">
              {new Date().getFullYear()} / All rights reserved
            </p>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
}
