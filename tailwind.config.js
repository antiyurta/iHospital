/** @type {import('tailwindcss').Config} */
module.exports = {
   important: true,
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   plugins: [require('tailwindcss/nesting'), require('tailwindcss')]
};
