"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLenis } from "./SmoothScroll";

// Elegant editorial background with animated orange circles
export default function Scene3D() {
  const [mounted, setMounted] = useState(false);
  const { scrollProgress } = useLenis();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="canvas-container bg-ivory dark:bg-ivory" />;
  }

  return (
    <div className="canvas-container bg-ivory dark:bg-ivory">
      {/* Animated Orange/Terracotta Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating circle - top right */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(198, 93, 59, 0.08) 0%, transparent 70%)",
            top: "-150px",
            right: "-100px",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Medium pulsing circle - left side */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(198, 93, 59, 0.06) 0%, transparent 70%)",
            top: "30%",
            left: "-100px",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small bouncing circle - center right */}
        <motion.div
          className="absolute w-[120px] h-[120px] rounded-full bg-terracotta/10"
          style={{
            top: "45%",
            right: "15%",
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tiny floating circle 1 */}
        <motion.div
          className="absolute w-[60px] h-[60px] rounded-full bg-terracotta/15"
          style={{
            top: "20%",
            left: "20%",
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Tiny floating circle 2 */}
        <motion.div
          className="absolute w-[40px] h-[40px] rounded-full bg-terracotta/20"
          style={{
            top: "65%",
            left: "10%",
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Tiny floating circle 3 */}
        <motion.div
          className="absolute w-[50px] h-[50px] rounded-full bg-terracotta/12"
          style={{
            top: "75%",
            right: "25%",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Circle outline with rotation */}
        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full border-2 border-terracotta/20"
          style={{
            top: "55%",
            left: "5%",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Circle outline 2 */}
        <motion.div
          className="absolute w-[150px] h-[150px] rounded-full border border-terracotta/15"
          style={{
            top: "10%",
            right: "30%",
          }}
          animate={{
            rotate: [360, 0],
            y: [0, 20, 0],
          }}
          transition={{
            rotate: {
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Solid small circle */}
        <motion.div
          className="absolute w-[30px] h-[30px] rounded-full bg-terracotta/25"
          style={{
            top: "35%",
            right: "8%",
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Large soft glow - bottom */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(198, 93, 59, 0.05) 0%, transparent 60%)",
            bottom: "-300px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating dots cluster */}
        <motion.div
          className="absolute w-[20px] h-[20px] rounded-full bg-terracotta/30"
          style={{ top: "80%", left: "30%" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[15px] h-[15px] rounded-full bg-terracotta/25"
          style={{ top: "82%", left: "33%" }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.div
          className="absolute w-[12px] h-[12px] rounded-full bg-terracotta/20"
          style={{ top: "78%", left: "28%" }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
      </div>

      {/* Parallax circles that respond to scroll */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[300px] h-[300px] rounded-full border border-terracotta/10"
          style={{
            top: "15%",
            right: "10%",
            transform: `translateY(${scrollProgress * -60}px) rotate(${scrollProgress * 30}deg)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        <div
          className="absolute w-[80px] h-[80px] bg-terracotta/10 rounded-full"
          style={{
            top: "25%",
            left: "15%",
            transform: `translateY(${scrollProgress * 40}px) scale(${1 + scrollProgress * 0.2})`,
            transition: "transform 0.3s ease-out",
          }}
        />

        <div
          className="absolute w-[180px] h-[180px] rounded-full border-2 border-terracotta/8"
          style={{
            bottom: "30%",
            right: "5%",
            transform: `translateY(${-scrollProgress * 80}px) rotate(${-scrollProgress * 45}deg)`,
            transition: "transform 0.4s ease-out",
          }}
        />

        <div
          className="absolute w-[100px] h-[100px] bg-terracotta/8 rounded-full"
          style={{
            bottom: "15%",
            left: "25%",
            transform: `translateY(${-scrollProgress * 50}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />
      </div>

      {/* Diagonal line accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[1px] h-[400px] bg-gradient-to-b from-transparent via-terracotta/20 to-transparent"
          style={{
            top: "20%",
            left: "30%",
            transform: `rotate(30deg) translateY(${scrollProgress * 100}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />

        <div
          className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-terracotta/30 to-transparent"
          style={{
            top: "60%",
            left: "5%",
            transform: `translateX(${scrollProgress * 50}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />
      </div>

      {/* Editorial vertical lines */}
      <div className="absolute inset-0 flex justify-between px-6 md:px-12 pointer-events-none">
        <div className="w-[1px] h-full bg-stone/10" />
        <div className="w-[1px] h-full bg-stone/10 hidden md:block" />
        <div className="w-[1px] h-full bg-stone/10 hidden lg:block" />
        <div className="w-[1px] h-full bg-stone/10" />
      </div>

      {/* Noise/grain texture */}
      <div className="grain" />
    </div>
  );
}
