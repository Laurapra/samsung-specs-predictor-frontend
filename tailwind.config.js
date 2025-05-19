/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'border': 'border 4s linear infinite',
      },
      keyframes: {
        'border': {
          to: { '--border-angle': '360deg' },
        }
      },
      colors: {
        samsung: {
          blue: '#1428a0',
          lightBlue: '#1428a0',
          black: '#000000',
          gray: '#f7f7f7',
          darkGray: '#4c4c4c',
          white: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}