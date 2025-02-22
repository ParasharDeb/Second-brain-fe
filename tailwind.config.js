/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        slate:{
          100:"#eeeeef",
          600:"#95989c"
        },
        purple:{
          200:"#e0e7fe",
          500:"#3e38a7",
          600:"#5046e4"
        }
      }
    },
  },
  plugins: [],
}

