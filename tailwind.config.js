/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: "'sans', serif",
        cormorant: "'Cormorant Garamond', serif"
      },
      colors:{
        search:'#EDE9E5'
      }
    },
  },
  plugins: [],
}

