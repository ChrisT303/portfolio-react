/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
      'balloon': "url('./assets/hotairballoon.png')",
      },
    },
  },
  plugins: [],
};
