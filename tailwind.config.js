/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#060B0E",
        customWhite: "#F9FDFF",
        customGray: "#C7CECF",
        customBlue: {
          DEFAULT: "#5492AC",
          dark: "#162B38",
        },
      },
      screens: {
        xxs: "400px",
        xs: "500px",
      },
    },
  },
  plugins: [aspectRatio],
};
