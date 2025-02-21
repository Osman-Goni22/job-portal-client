/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'customShadow':'10px 10px 50px rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [require('daisyui'),],
}

