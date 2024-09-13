/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        bg_primary: "#EEF0F2",
        bg_secondary: "#F3F3F3",
        text_primary: "#1C120C",
        text_secondary: "#7A7978",
        primary: "#3626A7",
        secondary: "#0DAB76",
        error: "#CB4C4E",
      },
      boxShadow: {
        custom: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};
