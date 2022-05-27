module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightBlue: "#E9F1FC",
        highlightBlue: "#055FFC",
        lightGradientBlue: "#D0E4FF",
        backgroundWhite: "#F8F9FD",
        lightGrey: "#606368",
        darkGrey: "#292B2D",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Questrial: ["Questrial", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
