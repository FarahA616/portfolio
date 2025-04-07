/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ensure dark mode is enabled
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths to match your project structure
  ],
  theme: {
    extend: {
      backgroundColor: {
        transparent: "transparent", // Ensure transparency is available
      },
    },
  },
  plugins: [],
};
