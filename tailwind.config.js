/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {      
    colors:{
    "orange": "hsl(35, 77%, 62%)",
    "red" : "hsl(5, 85%, 63%)",
    "darkBlue" : "hsl(240, 100%, 5%)",
    "offWhite" : "hsl(36, 100%, 99%)",
    "greyishBlue" : "hsl(233, 8%, 79%)"
  },
    extend: {
      height:{
        "45vh":"45vh"
      },
      zIndex:{
        "5":"5"
      }
    },
  },
  plugins: [],
}

