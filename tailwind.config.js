/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,css}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        ysabeau: ["Ysabeau", "sans-serif"],
        imprima: ["Imprima", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        wix: ['Wix Madefor Display', "sans-serif"]
      },
      colors: {
        flameColor: "#f46255",
        flameColor2: "#e16221",
        waterColor: "#0090b3",
        grayColor: "#6e8899",
      },
      boxShadow: {
        topShadow: "2px 0px 20px 10px rgba(225, 225, 225, 0.22)",
        bottomShadow: "0px 0px 25px 5px rgba(225, 225, 225, 0.2)",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.6)",
        base: [
          "0 4px 3px rgb(200 200 200 / 0.37)",
          "0 2px 2px rgb(0 0 0 / 0.06)",
        ],
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
  plugins: []
};
