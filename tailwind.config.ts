import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0a0a0a",
          950: "#060606",
          900: "#0a0a0a",
          800: "#121212",
          700: "#181818",
          600: "#202020",
          500: "#2a2a2a",
        },
        gold: {
          DEFAULT: "#b8964b",
          light: "#e8c977",
          bright: "#f2d998",
          deep: "#8a6d2f",
          dim: "#4a3d20",
        },
        ivory: "#f3efe6",
        mist: {
          100: "#e4e2dd",
          300: "#a8a6a0",
          500: "#7a7873",
          700: "#4c4a47",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at 50% 0%, rgba(184,150,75,0.16), transparent 60%)",
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(184,150,75,0.7), transparent)",
      },
      boxShadow: {
        gold: "0 0 40px rgba(184,150,75,0.15)",
      },
      maxWidth: {
        content: "1360px",
      },
    },
  },
  plugins: [],
};

export default config;
