/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    "extend": {
      "clipPath": {
        "myPolygon": "polygon(100% 0, 23% 48%, 100% 100%)"
      }
    },
  },
  plugins: [],
}