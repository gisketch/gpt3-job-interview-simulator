//tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-1': '#151718',
        'dark-2': '#242627',
        'dark-3': '#343839',
        'dark-4': '#474b4d',
        'blue-icon': '#3E90EF',
        'orange-icon': '#D84B10',
        'purple-icon': '#8D55EA',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
