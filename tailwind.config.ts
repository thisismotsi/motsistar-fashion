/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#92459B",   // purple
        secondary: "#E7C9F5", // lavender
        accent: "#B9A8F0",    // violet
        highlight: "#2D40E5", // blue
        navy: "#2D1674",      
        gold: "#B175FF",      // gold
        ivory: "#fffefc",
        charcoal: "#FAFBF4",
      },
      fontFamily: {
        heading: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(146, 69, 155, 0.4)",     // purple glow
        darkGlow: "0 0 20px rgba(45, 64, 229, 0.5)",  // blue glow
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
