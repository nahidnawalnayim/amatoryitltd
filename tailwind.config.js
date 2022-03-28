module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      padding: {
        '30px': '2200px',
       
      },
    
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
