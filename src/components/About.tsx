"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { IconBrandGithub } from "@tabler/icons-react";
import { Code2 } from "lucide-react";
import Image from "next/image";

// Tool data for orbiting animation
const tools = [
  { name: "React", color: "#61DAFB", icon: "⚛️" },
  { name: "Next.js", color: "#ffffff", icon: "▲" },
  { name: "TypeScript", color: "#3178C6", icon: "TS" },
  { name: "Node.js", color: "#339933", icon: "⬢" },
  { name: "MongoDB", color: "#47A248", icon: "🍃" },
  { name: "PostgreSQL", color: "#4169E1", icon: "🐘" },
  { name: "Docker", color: "#2496ED", icon: "🐳" },
  { name: "AWS", color: "#FF9900", icon: "☁️" },
];

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const features = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, performant web applications with React, Next.js, and TypeScript.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r border-border",
    },
    {
      title: "Modern Tech Stack",
      description:
        "Working with cutting-edge technologies to build scalable applications.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-border",
    },
    {
      title: "Open Source Contributor",
      description:
        "Contributing to open source projects and sharing knowledge with the developer community.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-border",
    },
    {
      title: "Available Worldwide",
      description:
        "Based in Casablanca, Morocco. Working with clients globally, delivering quality solutions across time zones.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,77,77,0.03)_0%,transparent_70%)]" />

      <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="px-0 sm:px-4 md:px-8 mb-8 sm:mb-12 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-accent mb-4 sm:mb-6 font-mono"
          >
            <span className="w-6 sm:w-8 h-px bg-accent" />
            What I Do
            <span className="w-6 sm:w-8 h-px bg-accent" />
          </motion.span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-foreground">
            Services & <span className="text-stroke">Expertise</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base max-w-2xl my-3 sm:my-4 mx-auto text-muted text-center font-normal px-2">
            Full-stack development with modern technologies. From concept to
            deployment, I build digital experiences that make an impact.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-border">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-foreground text-xl md:text-2xl md:leading-snug font-display font-bold">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-muted font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2",
      )}
    >
      {children}
    </p>
  );
};

// Code/Project preview skeleton - compact
const SkeletonOne = () => {
  return (
    <div className="relative flex py-4 px-2 gap-10 h-full">
      <div className="w-full p-3 mx-auto bg-background shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
            alt="Code editor"
            width={800}
            height={400}
            className="h-full w-full object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-20 bg-gradient-to-t from-background via-background to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-20 bg-gradient-to-b from-background via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

// Orbiting tools - Solar system with 5 orbits
const SkeletonTwo = () => {
  // 5 orbits with different radii, speeds, and directions
  const orbits = [
    { radius: 35, radiusMd: 50, duration: 8, direction: 1, tools: [tools[0]] },
    { radius: 60, radiusMd: 85, duration: 12, direction: -1, tools: [tools[1], tools[2]] },
    { radius: 85, radiusMd: 120, duration: 16, direction: 1, tools: [tools[3], tools[4]] },
    { radius: 110, radiusMd: 155, duration: 20, direction: -1, tools: [tools[5], tools[6]] },
    { radius: 135, radiusMd: 190, duration: 25, direction: 1, tools: [tools[7]] },
  ];

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden">
      {/* Central "Sun" */}
      <motion.div
        className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center z-10"
        animate={{
          boxShadow: [
            "0 0 15px rgba(255,77,77,0.5)",
            "0 0 35px rgba(255,77,77,0.8)",
            "0 0 15px rgba(255,77,77,0.5)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
      </motion.div>

      {/* 5 Orbit rings */}
      {orbits.map((orbit, i) => (
        <div
          key={`ring-${i}`}
          className="absolute rounded-full border dark:border-border/20 light:border-red-300/40 hidden sm:block"
          style={{
            width: orbit.radiusMd * 2.1,
            height: orbit.radiusMd * 2.1,
          }}
        />
      ))}
      {orbits.map((orbit, i) => (
        <div
          key={`ring-mobile-${i}`}
          className="absolute rounded-full border dark:border-border/20 light:border-red-300/40 sm:hidden"
          style={{
            width: orbit.radius * 2.1,
            height: orbit.radius * 2.1,
          }}
        />
      ))}

      {/* Orbiting tools on each ring - Desktop */}
      <div className="hidden sm:block">
        {orbits.map((orbit, orbitIndex) => (
          <motion.div
            key={`orbit-${orbitIndex}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: orbit.radiusMd * 2,
              height: orbit.radiusMd * 2,
            }}
            animate={{ rotate: 360 * orbit.direction }}
            transition={{
              duration: orbit.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {orbit.tools.map((tool, toolIndex) => {
              const angleInRadians =
                (toolIndex * 2 * Math.PI) / orbit.tools.length;
              const x = Math.cos(angleInRadians) * orbit.radiusMd;
              const y = Math.sin(angleInRadians) * orbit.radiusMd;

              return (
                <motion.div
                  key={tool.name}
                  className="absolute w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-sm font-bold shadow-lg cursor-pointer hover:scale-150 hover:z-50 transition-transform"
                  style={{
                    left: "50%",
                    top: "50%",
                    x: x - 20,
                    y: y - 20,
                    color: tool.color,
                  }}
                  animate={{ rotate: -360 * orbit.direction }}
                  transition={{
                    duration: orbit.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {tool.icon}
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>

      {/* Orbiting tools on each ring - Mobile */}
      <div className="sm:hidden">
        {orbits.map((orbit, orbitIndex) => (
          <motion.div
            key={`orbit-mobile-${orbitIndex}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: orbit.radius * 2,
              height: orbit.radius * 2,
            }}
            animate={{ rotate: 360 * orbit.direction }}
            transition={{
              duration: orbit.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {orbit.tools.map((tool, toolIndex) => {
              const angleInRadians =
                (toolIndex * 2 * Math.PI) / orbit.tools.length;
              const x = Math.cos(angleInRadians) * orbit.radius;
              const y = Math.sin(angleInRadians) * orbit.radius;

              return (
                <motion.div
                  key={tool.name}
                  className="absolute w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-xs font-bold shadow-lg"
                  style={{
                    left: "50%",
                    top: "50%",
                    x: x - 16,
                    y: y - 16,
                    color: tool.color,
                  }}
                  animate={{ rotate: -360 * orbit.direction }}
                  transition={{
                    duration: orbit.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {tool.icon}
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// GitHub link card
const SkeletonThree = () => {
  return (
    <a
      href="https://github.com/brahimbouargane"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <IconBrandGithub className="h-20 w-20 absolute z-10 inset-0 text-foreground m-auto group-hover/image:text-accent transition-colors" />
          <img
            src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop"
            alt="GitHub contributions"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </a>
  );
};

// Globe component
const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 0.3, 0.3], // Accent color (red)
      glowColor: [1, 0.3, 0.3],
      markers: [
        // Casablanca, Morocco
        { location: [33.5731, -7.5898], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
