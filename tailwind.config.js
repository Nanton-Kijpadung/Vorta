/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008080',
        secondary: '#92D050',
        accent: '#B7DB25',
        brandDark: '#0f172a',
        brandSurface: '#f8fafc',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Montserrat', 'sans-serif'],
        body: ['Noto Sans', 'Open Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
}