"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export default function InfiniteMarquee({
  children,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: InfiniteMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Clone the content for seamless loop
    const content = track.innerHTML;
    track.innerHTML = content + content;

    const totalWidth = track.scrollWidth / 2;
    const duration = totalWidth / speed;

    const tl = gsap.timeline({ repeat: -1 });

    if (direction === "left") {
      tl.fromTo(
        track,
        { x: 0 },
        { x: -totalWidth, duration, ease: "none" }
      );
    } else {
      tl.fromTo(
        track,
        { x: -totalWidth },
        { x: 0, duration, ease: "none" }
      );
    }

    if (pauseOnHover) {
      container.addEventListener("mouseenter", () => tl.pause());
      container.addEventListener("mouseleave", () => tl.resume());
    }

    return () => {
      tl.kill();
    };
  }, [speed, direction, pauseOnHover]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex whitespace-nowrap">
        {children}
      </div>
    </div>
  );
}
