"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const distance = 100 * speed;

    const props: gsap.TweenVars = {
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    };

    switch (direction) {
      case "up":
        props.y = -distance;
        break;
      case "down":
        props.y = distance;
        break;
      case "left":
        props.x = -distance;
        break;
      case "right":
        props.x = distance;
        break;
    }

    const animation = gsap.to(element, props);

    return () => {
      animation.kill();
    };
  }, [speed, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
