import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ivory: "var(--ivory)",
        cream: "var(--cream)",
        sand: "var(--sand)",
        stone: "var(--stone)",
        charcoal: "var(--charcoal)",
        ink: "var(--ink)",
        terracotta: {
          DEFAULT: "#C65D3B",
          dark: "#A84E31",
          light: "#D4725A",
        },
        burgundy: "#722F37",
        olive: "#5C6B4E",
        gold: "#B8860B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Fira Code", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(4rem, 15vw, 12rem)", { lineHeight: "0.85", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(3rem, 10vw, 8rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 7vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "screen-1/2": "50vh",
        "screen-3/4": "75vh",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "editorial": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-in-right": "slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "scale-up": "scaleUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "float-gentle": "floatGentle 8s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "spin-slow": "spin 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleUp: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-editorial": "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "editorial": "0 4px 30px rgba(26, 26, 24, 0.08)",
        "editorial-lg": "0 20px 40px rgba(26, 26, 24, 0.1)",
        "editorial-xl": "0 30px 60px rgba(26, 26, 24, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
