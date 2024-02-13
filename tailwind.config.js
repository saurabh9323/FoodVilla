/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        backColor: "#aad6ec",
        customBlue: "#81b1ce",
      },
      backgroundImage: {
        errorImage: "url('./src/Assets/image/img.webp')",
      },
    },
  },
  plugins: [],
};
