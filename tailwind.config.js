/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      colors: {
        'green'      : '#0D9488',
        'slate-green': '#8cf2ea',
        'dark'       : '#1E293B',
      }
    },
  },
  plugins: [],
}

