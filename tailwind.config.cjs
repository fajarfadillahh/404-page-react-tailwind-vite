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
      keyframes: {
        floting: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15px)" },
        },
        shadow: {
          "0%,100%": { transform: "scale(1,1)" },
          "50%": { transform: "scale(.85,.85)" },
        },
      },
      animation: {
        floting: "floting 2.5s infinite",
        shadow: "shadow 2.5s infinite",
      },
    },
  },
  plugins: [],
};
