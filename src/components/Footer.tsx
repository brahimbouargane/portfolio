"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted">
            <span>&copy; {currentYear}</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>Built with passion</span>
          </div>

          {/* Center */}
          <p className="text-xs sm:text-sm text-muted text-center">
            Designed & Developed by{" "}
            <span className="text-foreground font-medium">Brahim Bouargane</span>
          </p>

          {/* Right */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
              <ArrowUp size={12} className="sm:w-3.5 sm:h-3.5" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
