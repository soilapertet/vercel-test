/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        periwinkle : '#cdc1ff',
        babyPowder : '#fefefa'
      }
    },
  },
  plugins: [],
}

