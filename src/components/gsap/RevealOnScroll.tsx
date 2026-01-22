"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  rotation?: number;
  opacity?: number;
  ease?: string;
  start?: string;
  scrub?: boolean | number;
  markers?: boolean;
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  duration = 1,
  y = 60,
  x = 0,
  scale = 1,
  rotation = 0,
  opacity = 0,
  ease = "power3.out",
  start = "top 85%",
  scrub = false,
  markers = false,
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.set(element, {
      y,
      x,
      scale,
      rotation,
      opacity,
    });

    const animation = gsap.to(element, {
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        scrub,
        markers,
        once: !scrub,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === element) t.kill();
      });
    };
  }, [delay, duration, y, x, scale, rotation, opacity, ease, start, scrub, markers]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
