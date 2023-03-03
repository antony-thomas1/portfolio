/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      variants: {
        animation: ["motion-safe"]
     },
      animation:{
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      serif: ['ui-serif', 'Georgia',],
      mono: ['ui-monospace', 'SFMono-Regular',],
      epilogue: ['Epilogue', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      display: ['Oswald', ],
      body: ['"Open Sans"', ],
    }

    
  },
  plugins: [],
}