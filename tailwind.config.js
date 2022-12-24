/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js,ts,tsx}", "./pages/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)"
      }
    },
  },
  plugins: [],
}
