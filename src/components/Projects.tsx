"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, X } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Development",
    year: "2025",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    description: "A full-featured e-commerce platform with real-time inventory management and secure payment processing.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
  },
  {
    id: 2,
    title: "AI Content Generator",
    category: "AI / ML",
    year: "2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    description: "An AI-powered content generation tool that helps creators produce high-quality articles and marketing copy.",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Redis"],
  },
  {
    id: 3,
    title: "Project Management",
    category: "SaaS",
    year: "2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    description: "A comprehensive project management solution with Kanban boards and real-time collaboration.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Socket.io", "AWS"],
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Data Viz",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    description: "A powerful analytics dashboard featuring real-time data visualization and automated reporting.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "ClickHouse"],
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/90 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl bg-ivory dark:bg-sand overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 border border-stone flex items-center justify-center hover:bg-terracotta hover:border-terracotta hover:text-white transition-all"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 md:h-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover img-editorial"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-terracotta tracking-wider">
                {project.category}
              </span>
              <span className="font-mono text-xs text-charcoal/40">
                {project.year}
              </span>
            </div>

            <h3 className="font-display text-display-md font-medium text-ink mb-6">
              {project.title}
            </h3>

            <p className="text-charcoal/70 font-body leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-10">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm border border-stone text-charcoal/70 font-body"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="min-h-screen relative py-32 bg-cream dark:bg-cream"
    >
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div
          variants={projectVariants}
          className="grid md:grid-cols-12 gap-8 mb-20"
        >
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <motion.span
                className="font-mono text-xs text-terracotta tracking-wider"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                02
              </motion.span>
              <motion.div
                className="h-[1px] flex-1 bg-stone origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <h2 className="font-display text-display-lg font-medium text-ink">
              Selected Work
            </h2>
          </div>

          <motion.div
            className="md:col-span-8 md:pt-12"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-charcoal/70 font-body text-xl leading-relaxed max-w-2xl">
              A curated collection of projects that showcase my passion for creating
              impactful digital experiences with attention to detail and user-centric design.
            </p>
          </motion.div>
        </motion.div>

        {/* Projects Grid - Editorial Style */}
        <motion.div className="space-y-16" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`grid md:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <motion.div
                  className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''}`}
                  variants={imageVariants}
                >
                  <div className="relative overflow-hidden bg-sand aspect-[16/10]">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover img-editorial"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/10 transition-colors duration-500" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`md:col-span-5 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-xs text-terracotta tracking-wider">
                      {project.category}
                    </span>
                    <motion.div
                      className="h-[1px] w-8 bg-stone origin-left"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    />
                    <span className="font-mono text-xs text-charcoal/40">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-display text-display-sm md:text-display-md font-medium text-ink mb-4 group-hover:text-terracotta transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-charcoal/60 font-body leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-4 text-terracotta"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-body text-sm uppercase tracking-wider group-hover:underline">
                      View Project
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Divider */}
              {index < projects.length - 1 && (
                <motion.div
                  className="h-[1px] w-full bg-stone mt-16 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <a
            href="https://github.com/brahimbouargane"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4"
          >
            <span className="font-display text-lg text-ink group-hover:text-terracotta transition-colors">
              View All Projects on GitHub
            </span>
            <div className="w-12 h-12 border border-ink group-hover:border-terracotta group-hover:bg-terracotta flex items-center justify-center transition-all">
              <Github size={18} className="text-ink group-hover:text-white transition-colors" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
