module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'hero-image': "url('/assets/img/img1.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
