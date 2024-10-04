/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '1000ms',
        '2000': '2000ms',
        '5000': '5000ms',
      },
    },
  },
  plugins: [],
}

