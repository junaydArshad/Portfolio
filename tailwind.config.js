/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        '300': '300px', // Custom blur for 90% effect
      },
      fontFamily:{
        "Oleo": ["Oleo Script", 'system-ui'],
        "Dancing": [ "Dancing Script", "cursive"],
        "Playwrite" : ["Playwrite US Trad Guides", "cursive"]
       
      },
    },
  },
  plugins: [],
}

