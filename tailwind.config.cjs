/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        light: "hsl(0, 0%, 100%)",
        darkGray: "hsl(0, 0%, 52%)",
        lightGray: "hsl(0, 0%, 98%)",
        darkBlue: "hsl(209, 23%, 22%)",
        DarkerBlue: "hsl(207, 26%, 17%)",
        DarkestBlue: "hsl(200, 15%, 8%)",
      },
      boxShadow: {
        default: "0 0px 4px",
      },
    },
  },
  plugins: [],
};
