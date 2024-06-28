/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
        fontFamily: {
          curving: ["Luckiest Guy", "cursive"],
          second: ["Noto Sans HK", "sans-serif;"]
  
        },
        backgroundImage: {
          "hero": "url('/images/jordna-2.avif')",
          "her1": "url('/images/nike-2.webp')",

       
  
        },
      },
    
  },
  plugins: [],
};
