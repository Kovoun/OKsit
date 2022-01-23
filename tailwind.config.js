module.exports = {
  content: [
    './public/index.{html,js}',
    './public/**/*.{html,js}',
    './_layouts/default.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        'pixely1195': {'max': '1195px'},
        'pixely870': {'max': '870px'},
        'pixely750': {'max': '750px'},
      },
      fontFamily: {
        'fontaky': ['Montserrat', 'sans-serif'],
        'fontaky2': ['Roboto Slab', 'serif'],
      },

      colors: {
        'test': 'rgba( 0, 0, 0, 0.8)',
        'test2': 'rgba( 0, 0, 0, 0.5)',
        'test3': 'rgba( 0, 0, 0, 0.7)',
      },
      boxShadow: {
        '3xl': '0px 5px 10px rgba(0 0 0 / 90%)',
        '4xl': '0px 5px 10px rgba(0 0 0 / 75%)',
      
      }
    

    },
  },
  plugins: [],
}
