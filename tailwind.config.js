/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Red': '#E3646E',
        'Purple': '#BB72E9',
        'Blue': '#3996DB',
        'Green': '#82BC4F',
        'Yellow': '#EABD5F',
        'White': '#FFFFFF',
        'Gray-100': '#0D0E11',
        'Gray-200': '#16181D',
        'Gray-300': '#292C34',
        'Gray-400': '#878EA1',
        'Gray-500': '#C0C4CE',
        'Gray-600': '#E2E4E9',

      }
    },
  },
  plugins: [],
}