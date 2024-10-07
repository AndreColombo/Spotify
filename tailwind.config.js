/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        22: "#2A2A2A",
        12: "#121212",
        77: "#3BE477",
        B3: "#b3b3b3",
        F1: "#1f1f1f",
      },
      width: {
        main: "1012px",
        search: "474px",
        sidebar: "72px",
        playing: "420px",
        download: "120px",
      },
      height:{
        gradient: "320px"
      }
    },
  },
  plugins: [],
};
