/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'add-desktop': "url('./src/assets/images/add-desktop.svg')",
        'add-mobile': "url('./src/assets/images/add-mobile.svg')",
      }
    },
  },
  plugins: [],
}

