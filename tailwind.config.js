/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        moose: 'grey',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
