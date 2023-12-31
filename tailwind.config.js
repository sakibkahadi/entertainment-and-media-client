/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        display: "'Quicksand', sans-serif" // Adds a new `font-display` class
      }
    },
  },
  plugins: [require("daisyui")],
}

