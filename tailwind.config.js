/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-tosca":"#E7F6F2",
        "dark-tosca":"#395B64",
      },
      fontFamily:{
        "poppins" :"Poppins",
      },
      backgroundImage:{
        "patern":"url(/pattern.png)"
      }
    },
  },
  plugins: [],
}