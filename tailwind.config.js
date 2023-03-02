/** @type {import('tailwindcss').Config} */
module.exports = {
   important: true,
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            montserrat: ['Montserrat', 'sans-serif']
         }
      }
   },
   plugins: [require('tailwindcss/nesting'), require('tailwindcss')]
};
