/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['HeaderFont', 'sans-serif'], // Using 'header' as the custom class name
      },
    },
  },
  plugins: [],
}

