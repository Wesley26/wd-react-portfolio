/**
 * Note: All portfolio background images are rendered through "extend" backgroundImage 
 *        arrow function (line 20).
 *        The background images must be placed in ./images/portfolio_BG_Images.
 * 
 * Note for "purge": (line 16) Set "enabled" boolean to true while in production.
 *        Set "enabled" boolean to false while in development.
 *        The "content" array must contain a string pointing to all web
 *        component js files ONLY.
 * 
 * All other configurations must be referenced in TailwindCSS's documentation.
 **/

module.exports = {
  purge: {
    enabled: true,
      content: [ './src/**/*.js' ],
  },
  theme: {
    extend: {
      backgroundImage: theme => ({
        'website-one': "url('./images/portfolio_BG_Images/DrDzitzerWebsite.PNG')",
        'website-two': "url('./images/portfolio_BG_Images/BitBrokerChallenge.PNG')",
        'project-one': "url('./images/portfolio_BG_Images/ShoppingCartTitlePage.PNG')",
        'project-two': "url('./images/portfolio_BG_Images/JSCalculatorApp.PNG')",
        'project-three': "url('./images/portfolio_BG_Images/i01Bot.PNG')",
      }),
      fontFamily: {
        'title': ['Cabin', 'sans-serif'],
        'body': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'header-blue': '#a8dcd4',
        'footer-blue': '#a8dcd4',
        'body-gray': '#e0dfdf',
        'body-lightGray': '#f7fafc',
        'body-form': '#e2e8f0',
      },
      spacing: {
        '11long': '11rem',
        '20long': '20rem',
        '32long': '32rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    gridAutoFlow: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
