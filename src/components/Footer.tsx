"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 border-t border-stone/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-charcoal/60">
            <span>&copy; {currentYear}</span>
            <span className="w-1 h-1 rounded-full bg-terracotta" />
            <span>Built with passion</span>
          </div>

          {/* Center */}
          <p className="text-xs sm:text-sm text-charcoal/60 text-center">
            Designed & Developed by{" "}
            <span className="text-ink font-medium">Brahim Bouargane</span>
          </p>

          {/* Right */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-charcoal/60 hover:text-ink transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-stone flex items-center justify-center group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white transition-all">
              <ArrowUp size={12} className="sm:w-3.5 sm:h-3.5" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
