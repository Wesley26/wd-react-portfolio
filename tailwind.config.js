/**
 * Note: All portfolio background images are rendered through "extend" backgroundImage 
 *        arrow function on line 12.
 *        The background images must be placed in ./images/portfolio_BG_Images.
 * 
 * All other configurations must be referenced in TailwindCSS's documentation.
 **/

module.exports = {
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'website-one': "url('./images/portfolio_BG_Images/DrDzitzerWebsite.PNG')",
        'project-one': "url('./images/portfolio_BG_Images/ShoppingCartTitlePage.PNG')",
        'project-two': "url('./images/portfolio_BG_Images/JSCalculatorApp.PNG')",
        'project-three': "url('./images/portfolio_BG_Images/i01Bot.PNG')",
      }),
      colors: {
        'header-blue': '#a8dcd4',
        'footer-blue': '#a8dcd4',
        'body-gray': '#e0dfdf',
      },
      spacing: {
        '11long': '11rem',
        '20long': '20rem',
        '32long': '32rem',
      },
    },
  },
  variants: {
    gridAutoFlow: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
