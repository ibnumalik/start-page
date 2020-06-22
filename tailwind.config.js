module.exports = {
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      width: {
        '500': '500px',
      },
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'system-ui',
        'sans-serif',
      ],
    },
    maxWidth: {
      '18': '18rem',
    },
  },
  variants: {},
  plugins: [require('tailwind-nord')],
};
