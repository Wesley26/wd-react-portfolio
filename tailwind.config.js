module.exports = {
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'website-one': "url('./images/DrDzitzerWebsite.PNG')",
        'project-one': "url('./images/ShoppingCartTitlePage.PNG')",
        'project-two': "url('./images/JSCalculatorApp.PNG')",
        'project-three': "url('./images/i01Bot.PNG')",
      }),
      colors: {
        'header-blue': '#a8dcd4',
        'footer-blue': '#a8dcd4',
        'body-gray': '#e0dfdf',
      },
      spacing: {
        '11long': '11rem',
        '20long': '20rem',
      },
    },
  },
  variants: {
    gridAutoFlow: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
