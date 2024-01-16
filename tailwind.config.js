/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1A589B",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#969696",
        "light-black": "#212121",
        "main-navbar": "#0B1641",
        "event-grey": "#D9D9D9",
        "event-text-grey": "#0B1641",
        gry: "#F3F3F3",
        "dark-gry": "#6B6B6B",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
      },
    },
    screens: {
      txs: "280px",
      xxs: "400px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "900px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
});
