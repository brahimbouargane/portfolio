"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  Github,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { HoverScramble } from "./TextScramble";

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  images: string[];
  color: string;
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
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    ],
    color: "#FF4D4D",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    description:
      "A full-featured e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with performance and scalability in mind.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    title: "AI Content Generator",
    category: "AI / ML",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1676299081847-5c3f0d0c785c?w=1200&h=800&fit=crop",
    ],
    color: "#4D9FFF",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    description:
      "An AI-powered content generation tool that helps creators produce high-quality articles, social media posts, and marketing copy. Features multiple AI models and customizable outputs.",
    technologies: [
      "React",
      "Node.js",
      "OpenAI API",
      "MongoDB",
      "Redis",
      "Docker",
    ],
  },
  {
    id: 3,
    title: "Project Management",
    category: "SaaS",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=1200&h=800&fit=crop",
    ],
    color: "#4DFF91",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    description:
      "A comprehensive project management solution with Kanban boards, time tracking, team collaboration features, and detailed analytics. Designed for modern agile teams.",
    technologies: [
      "Next.js",
      "GraphQL",
      "PostgreSQL",
      "Socket.io",
      "AWS",
      "Tailwind CSS",
    ],
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Data Viz",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
    ],
    color: "#FFD84D",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    description:
      "A powerful analytics dashboard featuring real-time data visualization, customizable widgets, and automated reporting. Helps businesses make data-driven decisions.",
    technologies: [
      "React",
      "D3.js",
      "Python",
      "FastAPI",
      "ClickHouse",
      "WebSocket",
    ],
  },
  {
    id: 5,
    title: "Social Media App",
    category: "Mobile",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&h=800&fit=crop",
    ],
    color: "#D84DFF",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    description:
      "A modern social media application with real-time messaging, story features, and content discovery. Built with a focus on performance and user experience.",
    technologies: [
      "React Native",
      "Firebase",
      "Node.js",
      "Redis",
      "Cloudinary",
      "Expo",
    ],
  },
];

// ============= PROJECT MODAL COMPONENT =============
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, currentImageIndex]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[101] overflow-y-auto"
          >
            <div
              className="min-h-full flex items-center justify-center p-4 md:p-8"
              onClick={onClose}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-5xl bg-background border border-border rounded-2xl shadow-2xl my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all"
                >
                  <X size={20} />
                </button>

                {/* Image Gallery */}
                <div className="relative h-[280px] md:h-[450px] bg-subtle overflow-hidden rounded-t-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {/* Image overlay gradient */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}40 0%, transparent 50%)`,
                    }}
                  />

                  {/* Navigation Arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all"
                      >
                        <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all"
                      >
                        <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "bg-accent w-6"
                              : "bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div>
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <span
                          className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: project.color + "20",
                            color: project.color,
                          }}
                        >
                          {project.category}
                        </span>
                        <span className="text-xs sm:text-sm text-muted">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 sm:gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-border rounded-full text-xs sm:text-sm font-medium hover:border-accent hover:text-accent transition-all"
                      >
                        <Github size={14} className="sm:w-4 sm:h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent text-white rounded-full text-xs sm:text-sm font-medium hover:bg-accent/90 transition-all"
                      >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-subtle border border-border rounded-lg text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 md:py-32 relative"
    >
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-accent mb-4 sm:mb-6">
              <span className="w-6 sm:w-8 h-px bg-accent" />
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Featured
              <span className="text-accent"> Projects</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-muted max-w-md text-sm sm:text-base md:text-lg"
          >
            A selection of projects that showcase my passion for creating
            impactful digital experiences.
          </motion.p>
        </div>

        {/* Project List */}
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onOpenModal={openModal}
            />
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 sm:mt-16 flex justify-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3 border border-border rounded-full hover:border-accent hover:bg-accent/5 transition-all text-xs sm:text-sm font-medium"
          >
            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>View All Projects</span>
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform sm:w-4 sm:h-4"
            />
          </a>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-24 py-6 border-y border-border overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 mx-8 text-2xl md:text-4xl font-display font-bold"
            >
              <span className="text-muted/20">AVAILABLE FOR PROJECTS</span>
              <span className="text-accent">*</span>
              <span className="text-muted/20">LET&apos;S COLLABORATE</span>
              <span className="text-accent">*</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectItemProps {
  project: Project;
  index: number;
  isInView: boolean;
  onOpenModal: (project: Project) => void;
}

function ProjectItem({
  project,
  index,
  isInView,
  onOpenModal,
}: ProjectItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const item = itemRef.current;
    if (item) {
      item.addEventListener("mousemove", handleMouseMove);
      return () => item.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={itemRef}
      onClick={() => onOpenModal(project)}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative block py-6 md:py-10 border-b border-border cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Image */}
      <motion.div
        className="hidden md:block absolute w-[280px] h-[180px] rounded-lg overflow-hidden pointer-events-none z-50"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{ backgroundColor: project.color + "40" }}
        />
      </motion.div>

      {/* Content */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-6 md:gap-12">
          {/* Number */}
          <span className="text-sm text-muted font-mono w-6">0{index + 1}</span>

          {/* Title */}
          <h3 className="text-xl md:text-3xl lg:text-4xl font-display font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            <HoverScramble text={project.title} />
          </h3>
        </div>

        {/* Meta */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-sm text-muted uppercase tracking-wider">
            {project.category}
          </span>
          <span className="text-sm text-muted">{project.year}</span>
          <motion.div
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300"
            animate={{ rotate: isHovered ? 45 : 0 }}
          >
            <ArrowUpRight
              size={18}
              className="text-muted group-hover:text-white transition-colors"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile Meta */}
      <div className="md:hidden flex items-center gap-4 mt-3 ml-12">
        <span className="text-xs text-muted uppercase tracking-wider">
          {project.category}
        </span>
        <span className="text-xs text-muted">{project.year}</span>
      </div>

      {/* Hover Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-accent"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}
