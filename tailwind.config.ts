import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#07070C",
        surface: {
          DEFAULT: "#0E0E18",
          raised: "#13131F",
          border: "#1F1F2E",
        },
        accent: {
          violet: "#7C5CFF",
          "violet-dim": "#5A3FD9",
          blue: "#4D8AFF",
          cyan: "#5CE1E6",
        },
        ink: {
          primary: "#F5F5FA",
          muted: "#8A8A9E",
          faint: "#55556B",
        },
        // light theme counterparts
        light: {
          bg: "#FAFAFC",
          surface: "#FFFFFF",
          border: "#E7E7F0",
        },
      },
      fontFamily: {
        display: ["var(--font-geist)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(124,92,255,0.18), transparent 60%)",
        "aurora":
          "linear-gradient(115deg, #7C5CFF 0%, #4D8AFF 45%, #5CE1E6 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(124,92,255,0.5)",
        "glow-blue": "0 0 60px -10px rgba(77,138,255,0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
