"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  scale?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.5,
  scale = true,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const smoothScale = useSpring(scaleValue, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{
          y: smoothY,
          scale: scale ? smoothScale : 1,
        }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
}

export function ImageReveal({
  src,
  alt,
  className = "",
  direction = "left",
}: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const clipPathVariants = {
    left: {
      hidden: "inset(0 100% 0 0)",
      visible: "inset(0 0% 0 0)",
    },
    right: {
      hidden: "inset(0 0 0 100%)",
      visible: "inset(0 0 0 0%)",
    },
    up: {
      hidden: "inset(100% 0 0 0)",
      visible: "inset(0% 0 0 0)",
    },
    down: {
      hidden: "inset(0 0 100% 0)",
      visible: "inset(0 0 0% 0)",
    },
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: clipPathVariants[direction].hidden }}
        animate={isInView ? { clipPath: clipPathVariants[direction].visible } : {}}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          initial={{ scale: 1.4 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className = "", intensity = 15 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
