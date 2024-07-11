/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-header-background': ' hsl(230, 17%, 14%)',
        'dark-body-background': 'hsl(232, 19%, 15%)'
      },
    },
  },
  plugins: [],
}