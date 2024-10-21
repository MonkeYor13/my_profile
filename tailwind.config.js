/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./assets/fonts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeApp: "#F15A24",
        bg_primary: "#010101",
        bg_secundary: "#181A1B",
        title_text: "#FFFFFF",
        text: "#FFFFFF8E",
      },
    },
  },
  plugins: [],
};
