/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeApp: "#F15A24",
        background: "#010101",
        link: "#FE895F",
        Darkgrey: "#9D9D9D",
        Lightgrey: "#E7E7E7",
      },
    },
  },
  plugins: [],
};
