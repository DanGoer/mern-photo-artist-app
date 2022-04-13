module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        a: "#D4ECDD",
        b: "#345B63",
        c: "#152D35",
        d: "#112031",
      },
      keyframes: {
        sliderImage: {
          "0%": { objectPosition: "center center" },
          "25%": { objectPosition: "right top" },
          "70%": { objectPosition: "left bottom" },
          "100%": { objectPosition: "center center" },
        },
      },
      animation: {
        sliderImage: "sliderImage 30s linear infinite",
      },
    },
  },
  plugins: [],
};
