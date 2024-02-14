/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-anurati)', ...fontFamily.sans],
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '2',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '3.5rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '5rem',
      '10xl': '5.5rem',
      '11xl': '6rem',
      '12xl': '6.5rem',
      '13xl': '7rem',
      '14xl': '7.5rem',
      '15xl': '8rem',
      '16xl': '8.5rem',
      '17xl': '9rem',
      '18xl': '9.5rem',
      '19xl': '10rem',
      '20xl': '10.5rem',
      '21xl': '11rem',
      '22xl': '11.5rem',
      '23xl': '12rem',
      '24xl': '12.5rem',
      '25xl': '13rem',
    }
  },
  plugins: [],
};
