/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f90072",
        
"secondary": "#00c4ff",
        
"accent": "#007aff",
        
"neutral": "#001e1d",
        
"base-100": "#edffff",
        
"info": "#0091b1",
        
"success": "#a9d100",
        
"warning": "#b36d00",
        
"error": "#e20021",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

