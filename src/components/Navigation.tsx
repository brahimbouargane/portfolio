"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 sm:py-4 bg-background/80 backdrop-blur-xl shadow-sm"
            : "py-4 sm:py-6"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="text-lg sm:text-xl font-display font-bold text-foreground hover:text-accent transition-colors"
            >
              Bihi<span className="text-accent">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <ul className="flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className={`relative text-sm font-medium transition-colors group ${
                        activeSection === link.href.slice(1)
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                          activeSection === link.href.slice(1)
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <ThemeToggle />

                <motion.a
                  href="#contact"
                  className="px-5 py-2.5 text-sm font-medium bg-foreground text-background rounded-full hover:bg-accent transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                </motion.a>
              </div>
            </div>

            {/* Mobile - Theme Toggle & Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                  className="block w-6 h-0.5 bg-foreground"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  className="block w-6 h-0.5 bg-foreground"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                  className="block w-6 h-0.5 bg-foreground"
                />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-background"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              <nav className="flex-1 flex flex-col justify-center">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-4 text-display-md font-display font-bold transition-colors ${
                          activeSection === link.href.slice(1)
                            ? "text-foreground"
                            : "text-muted hover:text-foreground"
                        }`}
                      >
                        {link.name}
                        {activeSection === link.href.slice(1) && (
                          <span className="text-accent">.</span>
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="pb-12"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-4 text-center bg-foreground text-background rounded-full font-medium"
                >
                  Get in Touch
                </a>

                <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
