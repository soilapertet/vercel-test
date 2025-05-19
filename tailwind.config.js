/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        night : '#000f08',
        darkCyan : '#4e878c',
        periwinkle : '#cdc1ff',
        teagreen : '#c7f9cc'
      }
    },
  },
  plugins: [],
}

