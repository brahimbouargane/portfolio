"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const chars = "!<>-_\\/[]{}—=+*^?#________";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  trigger?: boolean;
}

export function TextScramble({
  text,
  className = "",
  delay = 0,
  speed = 50,
  trigger = true,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef(0);
  const resolveRef = useRef(0);

  useEffect(() => {
    if (!trigger) return;

    const timeout = setTimeout(() => {
      setIsScrambling(true);
      let iteration = 0;
      const originalText = text;

      const interval = setInterval(() => {
        setDisplayText(
          originalText
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return originalText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= originalText.length) {
          clearInterval(interval);
          setIsScrambling(false);
        }

        iteration += 1 / 3;
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed, trigger]);

  return (
    <span className={`${className} ${isScrambling ? "font-mono" : ""}`}>
      {displayText}
    </span>
  );
}

// Hover scramble effect
interface HoverScrambleProps {
  text: string;
  className?: string;
}

export function HoverScramble({ text, className = "" }: HoverScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 2;
    }, 30);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    scramble();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  return (
    <motion.span
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block" }}
    >
      {displayText}
    </motion.span>
  );
}

// Split text animation
interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
}: SplitTextProps) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * staggerDelay,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

// Word by word reveal
interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function WordReveal({ text, className = "", delay = 0 }: WordRevealProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
