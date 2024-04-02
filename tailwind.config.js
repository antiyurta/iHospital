/** @type {import('tailwindcss').Config} */
module.exports = {
   important: true,
   theme: {
      fontFamily: {
         times: ['Times New Roman', 'serif']
      }
   },
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   plugins: [require('tailwindcss/nesting'), require('tailwindcss')]
};
