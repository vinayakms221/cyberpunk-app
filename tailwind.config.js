/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {fontFamily: {
      orbitron: ['Orbitron']
    }},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black"],
  },
}

