/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        KellySlab: ["'Roboto Slab'", "serif"],
      },
      textShadow: {
        customRed: '4px 3px 4px rgba(255, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-customRed': {
          textShadow: '4px 3px 4px rgba(255, 0, 0, 0.5)', 
        },
      });
    },
  ],
};
