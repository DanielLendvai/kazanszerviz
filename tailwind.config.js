/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,css}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        topShadow: "20px 5px 20px 20px rgba(225, 225, 225, 0.45)",
        bottomShadow: "0px 5px 25px 5px rgba(225, 225, 225, 0.3)",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.6)",
        "base": ["0 4px 3px rgb(200 200 200 / 0.37)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
};
