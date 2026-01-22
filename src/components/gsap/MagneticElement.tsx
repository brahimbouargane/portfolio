"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";

interface MagneticElementProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  innerStrength?: number;
}

export default function MagneticElement({
  children,
  className = "",
  strength = 0.3,
  innerStrength = 0.5,
}: MagneticElementProps) {
  const magnetRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const magnet = magnetRef.current;
    const inner = innerRef.current;
    if (!magnet || !inner) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = magnet.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      gsap.to(magnet, {
        x: deltaX * strength,
        y: deltaY * strength,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(inner, {
        x: deltaX * innerStrength,
        y: deltaY * innerStrength,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(magnet, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });

      gsap.to(inner, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    magnet.addEventListener("mousemove", handleMouseMove);
    magnet.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      magnet.removeEventListener("mousemove", handleMouseMove);
      magnet.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, innerStrength]);

  return (
    <div ref={magnetRef} className={className}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
