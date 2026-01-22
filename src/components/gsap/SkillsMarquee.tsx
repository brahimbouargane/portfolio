"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Figma",
];

export default function SkillsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Clone content for seamless loop
    const content = track.innerHTML;
    track.innerHTML = content + content;

    const totalWidth = track.scrollWidth / 2;

    const tl = gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="py-16 overflow-hidden border-y border-stone/30 bg-cream/50 dark:bg-sand/50">
      <div ref={trackRef} className="flex whitespace-nowrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-8 px-8"
          >
            <span className="font-display text-4xl md:text-6xl font-medium text-ink/10 hover:text-terracotta transition-colors duration-300">
              {skill}
            </span>
            <span className="w-3 h-3 rounded-full bg-terracotta/30" />
          </div>
        ))}
      </div>
    </div>
  );
}
