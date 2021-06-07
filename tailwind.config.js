module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4F5D75',
        'dark-blue': '#2D3142',
        'light-blue': '#A7C5F9',
        'dark-primary': '#14213D',
        'light-primary': '#4973BB',
        blue: '#8196BB',
        orange: '#EF8354',
        'dark-orange': '#E85110',
        gray: '#6D6D6D',
        'light-gray': '#BFC0C0',
        pink: '#EF547E',
        yellow: '#FCA311'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'md': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '2.5rem',
        '5xl': '3.125rem',
        '6xl': '3.5rem',
        '7xl': '4.0625rem',
        '8xl': '5rem',
        '9xl': '6.25rem'
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1440px'
      },
      spacing: {
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '25': '6.25rem',
        '50': '12.5',
        '87': '21.625rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
