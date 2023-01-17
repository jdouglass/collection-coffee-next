/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '350px',
      sm: '550px',
      md: '750px',
      lg: '1050px',
      xl: '1350px',
      '2xl': '1600px',
      '3xl': '1950px',
    },
    extend: {
      backgroundImage: {
        'chevron-down': "url('/public/icons/chevron-down.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
