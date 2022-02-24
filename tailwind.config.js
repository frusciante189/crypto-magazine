module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
        spaceMono: ["Space Mono", "monospace"],
      },
      colors: {
        darkBg: "#151718",
        lightTitle: "#11181c",
        lightText: "#1a1523",
        darkTitle: "#ecedee",
        darkText: "#ededef",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
