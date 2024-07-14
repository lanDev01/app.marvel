/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {
        'calc': 'calc(100vh - 5rem)'
      }
    },
  },
  plugins: [],
}
