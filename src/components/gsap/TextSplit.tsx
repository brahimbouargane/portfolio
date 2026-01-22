"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextSplitProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  animation?: "chars" | "words" | "lines";
  trigger?: boolean;
}

export default function TextSplit({
  children,
  className = "",
  delay = 0,
  stagger = 0.03,
  as: Component = "span",
  animation = "chars",
  trigger = true,
}: TextSplitProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const container = containerRef.current;
    const text = children;

    // Split text based on animation type
    let elements: string[] = [];
    if (animation === "chars") {
      elements = text.split("");
    } else if (animation === "words") {
      elements = text.split(" ");
    } else {
      elements = [text];
    }

    // Create spans for each element
    container.innerHTML = elements
      .map((el, i) => {
        const content = animation === "words" && i < elements.length - 1 ? el + "&nbsp;" : el;
        return `<span class="inline-block overflow-hidden"><span class="split-char inline-block" style="transform: translateY(100%)">${content === " " ? "&nbsp;" : content}</span></span>`;
      })
      .join("");

    const chars = container.querySelectorAll(".split-char");

    if (trigger) {
      gsap.to(chars, {
        y: 0,
        duration: 0.8,
        stagger: stagger,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once: true,
        },
      });
    } else {
      gsap.to(chars, {
        y: 0,
        duration: 0.8,
        stagger: stagger,
        ease: "power3.out",
        delay: delay,
      });
    }

    hasAnimated.current = true;

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [children, animation, delay, stagger, trigger]);

  return (
    <Component ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>
      {children}
    </Component>
  );
}
