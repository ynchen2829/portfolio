/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-roboto-mono)']
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
          },
          "55%":{
            width:"55%"
          },
          "100%": {
            width: "100%"
          } 
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "black"
          }  
        },
      },
      animation: {
        typing: "typing 5s steps(20) infinite alternate, blink .5s infinite"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
],
}