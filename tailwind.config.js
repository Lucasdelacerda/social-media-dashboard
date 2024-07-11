/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-header-background': 'hsl(232, 19%, 15%)',
        'dark-body-background': ''
      },
    },
  },
  plugins: [],
}