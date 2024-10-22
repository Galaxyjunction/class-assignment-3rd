import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',    // Coral
        secondary: '#4ECDC4',  // Sea green
        accent: '#FFE66D',     // Yellow
        background: '#FFF5E1', // Soft cream
        text: '#1A535C',       // Deep navy
        neutral: '#FFEBE7',    // Light peach
      },
    },
  },
  plugins: [],
};
export default config;
