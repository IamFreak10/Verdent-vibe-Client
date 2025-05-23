/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your folder structure
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // if using DaisyUI
  daisyui: {
    themes: ["light", "dark"], // or add more like 'cupcake', 'forest', etc.
  },
};
