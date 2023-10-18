/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "4rem",
    },
    extend: {},
  },
  plugins: [daisyui],
  darkMode: "class",
};
