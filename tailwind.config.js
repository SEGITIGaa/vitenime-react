/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark":"#2C3333",
        "light-tosca":"#E7F6F2",
        "semidark-tosca":"#A5C9CA",
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