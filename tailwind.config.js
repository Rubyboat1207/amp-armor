/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#00ffff',  //Electric Cyan
          100: '#00ffea', //Green Energy
          200: '#006bff', //Bond Blue
          300: '#565656', //Misty Black
          400: '#b3b3b3', //Foggy Gray
          500: '#FFFFFF', //White
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        },
        'electric-cyan': {50: '#00ffff', 100: '#49acfc'},
        'bond-blue': '#006bff'
      }
    },
  },
  darkMode: 'class',
  plugins: [require('flowbite/plugin'), require('flowbite-typography')],
}

