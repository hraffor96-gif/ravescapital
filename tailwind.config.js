/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Montserrat'", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#B8922A",
          light: "#D4A843",
        },
        navy: "#0D1B2A",
        charcoal: "#1C1C1E",
        "off-white": "#F5F3EF",
      },
    },
  },
  plugins: [],
};
