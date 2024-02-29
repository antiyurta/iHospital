/** @type {import('tailwindcss').Config} */
module.exports = {
   important: true,
   theme: {
      fontFamily: {}
   },
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   plugins: [require('tailwindcss/nesting'), require('tailwindcss')]
};
