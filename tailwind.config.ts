import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5", // Indigo-600
          light: "#6366F1",   // Indigo-500
          dark: "#4338CA",    // Indigo-700
        },
        secondary: {
          DEFAULT: "#10B981", // Emerald-500
          light: "#34D399",   // Emerald-400
          dark: "#059669",    // Emerald-600
        },
        accent: {
          DEFAULT: "#F59E0B", // Amber-500
          light: "#FBBF24",   // Amber-400
          dark: "#D97706",    // Amber-600
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-border": "gradient-border 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(79, 70, 229, 0.6)" },
        },
        "gradient-border": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
