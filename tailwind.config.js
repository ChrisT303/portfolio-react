/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        balloon: "url('./assets/eyes.png')",
      },
      backgroundImage2: {
        eyes: "url('./assets/Eye-graffiti.png')",
      },
    },
  },
  plugins: [],
};
