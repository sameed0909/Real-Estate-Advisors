/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {height: {
      '78': '19.5rem', // 78 * 0.25rem
    },},
  },
  plugins: [],
}

