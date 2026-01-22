"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Code2, Globe, Layers, Zap } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Frontend Development",
    description:
      "Creating responsive, performant interfaces with React, Next.js, and TypeScript that delight users.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Backend Systems",
    description:
      "Building scalable APIs and databases with Node.js, Python, PostgreSQL, and MongoDB.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Performance Optimization",
    description:
      "Ensuring speed and efficiency across all layers of the stack for seamless experiences.",
  },
  {
    icon: Globe,
    number: "04",
    title: "Full-Stack Solutions",
    description:
      "End-to-end development from concept to deployment, delivering complete digital products.",
  },
];

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15%" });

  return (
    <section
      id="about"
      ref={containerRef}
      className="min-h-screen relative py-32 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-12 gap-8 mb-24"
        >
          <motion.div variants={slideInLeft} className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <motion.span
                className="font-mono text-xs text-terracotta tracking-wider"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                01
              </motion.span>
              <motion.div
                className="h-[1px] flex-1 bg-stone origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <h2 className="font-display text-display-lg font-medium text-ink">
              What I Do
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-8 md:pt-12"
          >
            <p className="text-charcoal/70 font-body text-xl leading-relaxed max-w-2xl">
              I specialize in building{" "}
              <span className="text-ink font-medium">
                full-stack applications
              </span>{" "}
              with a focus on creating seamless, high-performance experiences.
              From elegant frontends to robust backends, I bring ideas to life
              with meticulous attention to detail.
            </p>
          </motion.div>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-x-12 gap-y-16 mb-24"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Top border with animation */}
              <motion.div
                className="h-[1px] w-full bg-stone mb-8 group-hover:bg-terracotta transition-colors duration-500 origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              />

              <div className="flex items-start gap-6">
                <motion.span
                  className="font-mono text-xs text-stone group-hover:text-terracotta transition-colors"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  {service.number}
                </motion.span>

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                      }}
                    >
                      <service.icon size={20} className="text-terracotta" />
                    </motion.div>
                    <h3 className="font-display text-xl font-medium text-ink">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-charcoal/60 font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats/Experience row */}
        <motion.div
          variants={scaleIn}
          className="border-t border-b border-stone py-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="text-center md:text-left"
                whileHover={{ scale: 1.05 }}
              >
                <motion.p
                  className="font-display text-display-md font-medium text-ink mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + index * 0.15,
                    type: "spring",
                  }}
                >
                  {stat.number}
                </motion.p>
                <p className="font-body text-sm text-charcoal/50 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal note */}
        <motion.div
          variants={itemVariants}
          className="mt-24 grid md:grid-cols-12 gap-8"
        >
          <div className="md:col-span-3">
            <p className="font-mono text-xs text-terracotta tracking-wider mb-2">
              Philosophy
            </p>
          </div>
          <div className="md:col-span-9">
            <blockquote className="font-display text-display-sm text-ink italic leading-relaxed">
              &ldquo;Good design is not just what looks good. It also needs to
              perform, convert, astonish, and fulfill its purpose. It should be
              user-friendly and elegant.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 mt-8">
              <div className="h-[1px] w-12 bg-terracotta" />
              <span className="font-body text-sm text-charcoal/60">
                My approach to development
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
