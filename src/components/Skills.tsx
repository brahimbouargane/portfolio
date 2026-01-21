"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TextReveal } from "./TextReveal";
import { TiltCard } from "./ParallaxImage";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", icon: "⚛️", level: 95 },
      { name: "Next.js", icon: "▲", level: 92 },
      { name: "TypeScript", icon: "📘", level: 90 },
      { name: "Tailwind CSS", icon: "🎨", level: 95 },
      { name: "Framer Motion", icon: "🎬", level: 88 },
      { name: "Vue.js", icon: "💚", level: 75 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: "🟢", level: 90 },
      { name: "Python", icon: "🐍", level: 85 },
      { name: "PostgreSQL", icon: "🐘", level: 88 },
      { name: "MongoDB", icon: "🍃", level: 85 },
      { name: "GraphQL", icon: "◈", level: 82 },
      { name: "Redis", icon: "🔴", level: 78 },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "🛠️",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", icon: "📦", level: 92 },
      { name: "Docker", icon: "🐳", level: 80 },
      { name: "AWS", icon: "☁️", level: 75 },
      { name: "Figma", icon: "🎯", level: 85 },
      { name: "Linux", icon: "🐧", level: 80 },
      { name: "CI/CD", icon: "🔄", level: 78 },
    ],
  },
];

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const currentCategory = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-zinc-50 dark:bg-transparent"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            My Skills
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-zinc-900 dark:text-white">
            <TextReveal delay={0.2}>Technologies I</TextReveal>
            <br />
            <TextReveal className="text-gradient" delay={0.4}>
              Work With
            </TextReveal>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            A comprehensive toolkit refined through years of building
            exceptional digital experiences
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-white"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color}`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span>{category.icon}</span>
                {category.title}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentCategory?.skills.map((skill, index) => (
              <TiltCard key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-lg dark:shadow-none"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{skill.icon}</span>
                      <div>
                        <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">{skill.name}</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-500">
                          {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
                        </p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-gradient">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${currentCategory.color}`}
                    />
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Orbit Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-24 relative h-80 hidden lg:block"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Center */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
              FS
            </div>

            {/* Orbits */}
            {[150, 220, 290].map((radius, orbitIndex) => (
              <motion.div
                key={radius}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  marginLeft: -radius,
                  marginTop: -radius,
                }}
              >
                <div className="w-full h-full rounded-full border border-zinc-200 dark:border-zinc-800/50" />
                {skillCategories[orbitIndex]?.skills.slice(0, 4).map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="absolute w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-xl shadow-lg dark:shadow-none"
                    initial={{
                      top: "50%",
                      left: "50%",
                      x: "-50%",
                      y: "-50%",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20 + orbitIndex * 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      transformOrigin: `${radius}px 0px`,
                      rotate: `${(i * 360) / 4}deg`,
                    }}
                  >
                    <motion.span
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 20 + orbitIndex * 5, repeat: Infinity, ease: "linear" }}
                    >
                      {skill.icon}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
