module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'light-primary': '#58bbfc',
        'dark-primary': '#53adff',
        'light-secondary': '#f3f3f3',
        'dark-secondary': '#6c6c6d',
        'light-text': '#303030',
        'dark-text': '#f4f4f4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
