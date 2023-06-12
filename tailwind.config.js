/** @type {import('tailwindcss').Config} */
module.exports = {
   important: true,
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            montserrat: ['Montserrat', 'sans-serif']
         },
         colors: {
            'color-range': {
               0: '#ff0000',
               1: '#ff3300',
               2: '#ff6600',
               3: '#ff9900',
               4: '#ffcc00',
               5: '#ffff00',
               6: '#ccff00',
               7: '#99ff00',
               8: '#66ff00',
               9: '#33ff00',
               10: '#00FF00'
            }
         }
      }
   },
   plugins: [require('tailwindcss/nesting'), require('tailwindcss')]
};
