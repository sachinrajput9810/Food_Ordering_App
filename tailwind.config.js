/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '360': '360deg', // Adding custom rotate class
      },
    },
  },
  plugins: [],
}

