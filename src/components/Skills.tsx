"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiFramer,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiFirebase,
  SiPrisma,
  SiDocker,
  SiAmazonwebservices as SiAmazonaws,
  SiGit,
  SiVercel,
  SiNetlify,
  SiLinux,
  SiGithubactions,
  SiFigma,
  SiJest,
  SiPostman,
  SiVite,
  SiWebpack,
  SiNpm,
  SiCypress,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiBootstrap,
  SiMui,
  SiChakraui,
  SiStyledcomponents,
  SiNestjs,
  SiDjango,
  SiFastapi,
  SiMysql,
  SiSupabase,
  SiDrizzle,
  SiKubernetes,
  SiTerraform,
  SiGooglecloud,
  SiNginx,
  SiCloudflare,
  SiYarn,
  SiPnpm,
  SiStorybook,
  SiVitest,
  SiEslint,
  SiPrettier,
  SiNotion,
  SiJira,
} from "react-icons/si";
import { BiLogoVisualStudio as SiVisualstudiocode } from "react-icons/bi";

import { IconType } from "react-icons";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const skillCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Svelte", icon: SiSvelte, color: "#FF3E00" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Sass", icon: SiSass, color: "#CC6699" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
      { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "currentColor" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Prisma", icon: SiPrisma, color: "currentColor" },
      { name: "Drizzle", icon: SiDrizzle, color: "#C5F74F" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Vercel", icon: SiVercel, color: "currentColor" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Testing",
    skills: [
      { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
      { name: "Cypress", icon: SiCypress, color: "currentColor" },
      { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
      { name: "Yarn", icon: SiYarn, color: "#2C8EBB" },
      { name: "pnpm", icon: SiPnpm, color: "#F69220" },
      { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
      { name: "Prettier", icon: SiPrettier, color: "#F7B93E" },
      { name: "Notion", icon: SiNotion, color: "currentColor" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
    ],
  },
];

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [activeTab, setActiveTab] = useState("frontend");

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="min-h-screen relative py-32 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
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
                03
              </motion.span>
              <motion.div
                className="h-[1px] flex-1 bg-stone origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <h2 className="font-display text-display-lg font-medium text-ink">
              Skills & Tools
            </h2>
          </div>

          <motion.div
            className="md:col-span-8 md:pt-12"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-charcoal/70 font-body text-xl leading-relaxed max-w-2xl">
              A comprehensive toolkit built over years of hands-on experience,
              enabling me to deliver complete, production-ready solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 mb-16 border-b border-stone"
        >
          {skillCategories.map((category, idx) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`relative px-6 py-4 font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === category.id
                  ? "text-terracotta"
                  : "text-charcoal/60 hover:text-ink"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === category.id && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-terracotta"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.1 },
              },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {activeCategory?.skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={skillCardVariants}
                  className="group p-6 border border-stone hover:border-terracotta bg-ivory dark:bg-sand hover:shadow-editorial transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center text-ink"
                      style={
                        skill.color !== "currentColor"
                          ? { color: skill.color }
                          : undefined
                      }
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                    >
                      <IconComponent size={32} />
                    </motion.div>
                    <span className="font-body text-sm text-charcoal/80 group-hover:text-ink transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Approach note */}
        <motion.div
          variants={itemVariants}
          className="mt-24 grid md:grid-cols-12 gap-8"
        >
          <div className="md:col-span-3">
            <p className="font-mono text-xs text-terracotta tracking-wider">
              Approach
            </p>
          </div>
          <div className="md:col-span-9">
            <p className="text-charcoal/70 font-body text-lg leading-relaxed">
              I believe in using the right tool for the job. While I have deep
              expertise in React and Node.js ecosystems, I continuously explore
              new technologies to deliver optimal solutions for each unique
              challenge.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
