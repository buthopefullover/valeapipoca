/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'eerie_black': '#14181C',
        'gun_metal': '#2C3440',
        'pewter_blue': '#99AABB',
        'charleston_green': '#21282F',
      },
      boxShadow: {
        'blur': '0 0 100px 100px #21282F inset',
      },
    },
  },
  plugins: [],
}
