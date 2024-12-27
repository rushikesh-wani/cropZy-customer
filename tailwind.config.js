/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "rotate-gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "25%": { backgroundPosition: "50% 100%" },
          "50%": { backgroundPosition: "100% 50%" },
          "75%": { backgroundPosition: "50% 0%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "rotate-gradient": "rotate-gradient 2s linear infinite",
      },
      backgroundImage: {
        "AI-Shimmer":
          "linear-gradient(90deg, rgba(255, 27, 97, 0.79) 13%, rgba(238, 140, 12, 0.82) 61%, rgba(148, 107, 243, 0.78) 91%)",
      },
      colors: {
        darkDivider: "#414143",
        darkCard: "#121212",
        darkText: "#e2e0d1",
        darkAddBtn: "#2a2121",
      },
    },
  },
  plugins: [],
};
