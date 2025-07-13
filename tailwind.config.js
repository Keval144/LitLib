import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        logo: ['Montserrat', 'sans-serif'],
      },
      colors: {
        background: "var(--color-bg)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
      },
    },
  },
  darkMode: "class", // Important for switching via class
  plugins: [heroui()],
};

module.exports = config;
