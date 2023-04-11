/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'hero': "hero"
      },
      colors: {
        primary: "#224229",
        secondary: "#fcf9f6",
        accentPeach: "#f6cfb2",
        accentCream: "#f8f1e3",
        bodyColor: "#f8f3e7"
      },
      fontFamily: {
        Gelasio: ['Gelasio', 'serif'],
        Nunito: ['Nunito', 'sans-serif'],
        //For h4 headings:
        Archivo: ['Archivo', 'sans-serif']
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};