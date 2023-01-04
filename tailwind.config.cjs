/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        yellow: {
          600: "#dfaa4e",
        },
        gray: {
          900: "#161513",
        },
      },
    },
  },
  plugins: [],
};
