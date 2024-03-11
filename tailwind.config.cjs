/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: "#050816",
      //   secondary: "#aaa6c3",
      //   tertiary: "#151030",
      //   accent: "#915EFF",
      //   "black-100": "#100d25",
      //   "black-200": "#090325",
      //   "white-100": "#f3f3f3",
      // },
      // colors: {
      //   light: "#f3f3f3",
      //   dark: "#090325",
      //   primary: "#915EFF",
      //   secondary: "#aaa6c3",
      // },
      colors: {
        light: "#ECECEC",
        dark: "#151D3B",
        primary: "#43326B",
        secondary: "#B1A8B3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  safelist: ["line-clamp-1", "line-clamp-2", "line-clamp-3", "line-clamp-4", "line-clamp-5", "line-clamp-6"],
  plugins: [],
}
