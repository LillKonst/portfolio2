/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#060B0E",
        customWhite: "#F9FDFF",
        customBlue: "#5492AC",
        customGray: "#C7CECF",
      },
      screens: {
        xxs: "400px",
        xs: "500px",
      },
    },
  },
  plugins: [],
};
