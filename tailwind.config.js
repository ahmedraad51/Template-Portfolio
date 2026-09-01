// Tailwind v4 reads its theme from `@theme` in src/index.css.
// This file is kept only as a reference for the brand palette.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6946AB",
        "primary-dark": "#5C3A9A",
        "primary-light": "#8B6DC7",
        "primary-soft": "#F4F0FB",
        dark: "#1A1030",
        body: "#6B6880",
      },
      fontFamily: {
        sans: ["Inter", "Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
}
