"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  speed = 50,
  direction = "left",
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className={`flex gap-8 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

interface MarqueeTextProps {
  text: string;
  separator?: string;
  className?: string;
  speed?: number;
}

export function MarqueeText({
  text,
  separator = "—",
  className = "",
  speed = 30,
}: MarqueeTextProps) {
  const items = Array(10).fill(text);

  return (
    <Marquee speed={speed} className={className}>
      <div className="flex items-center gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span>{item}</span>
            <span className="text-primary">{separator}</span>
          </span>
        ))}
      </div>
    </Marquee>
  );
}
