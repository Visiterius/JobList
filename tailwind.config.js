/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {listStyleType: {
          none: 'none',
          disc: 'disc',
          decimal: 'decimal',
          square: 'square',
          roman: 'upper-roman',
      },
    extend: {
        fontFamily: {
            'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        },
    },
  },
  plugins: [],
}
