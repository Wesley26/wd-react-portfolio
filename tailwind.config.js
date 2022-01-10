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
      content: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        ///////////////////////PORTFOLIO BACKGROUND IMAGES////////////////////////////////
        'realWorld-oneA': "url('./images/portfolio_BG_Images/SketchDev1.PNG')",
        'realWorld-oneB': "url('./images/portfolio_BG_Images/SketchDev2.PNG')",
        'realWorld-oneC': "url('./images/portfolio_BG_Images/SketchDev3.PNG')",
        'realWorld-oneD': "url('./images/portfolio_BG_Images/SketchDev4.PNG')",
        'realWorld-oneE': "url('./images/portfolio_BG_Images/SketchDev5.png')",
        'realWorld-oneF': "url('./images/portfolio_BG_Images/SketchDev6.png')",
        'mobile-one': "url('./images/portfolio_BG_Images/iOS_Weather_App.png')",
        'mobile-two': "url('./images/portfolio_BG_Images/CHOYCES_App_Demo_1.PNG')",
        'website-one': "url('./images/portfolio_BG_Images/DrDzitzerWebsite.PNG')",
        'website-two': "url('./images/portfolio_BG_Images/BitBrokerChallenge.PNG')",
        'website-three': "url('./images/portfolio_BG_Images/WD_VIZE.png')",
        'project-one': "url('./images/portfolio_BG_Images/KartersBotScreen.PNG')",
        //////////////////////////////////////////////////////////////////////////////////
      },
      fontFamily: {
        'title': ['Cabin', 'sans-serif'],
        'body': ['Josefin Sans', 'sans-serif'],
      },
      fontSize: {
        '20e': '20px',
        '35e': '35px',
      },
      colors: {
        'header-blue': '#a8dcd4',
        'footer-blue': '#a8dcd4',
        'body-gray': '#e0dfdf',
        'body-lightGray': '#f7fafc',
        'body-form': '#e2e8f0',
      },
      height: {
        '51.6long': '51.6rem',
        '30long': '30rem',
        '26.9long': '26.9rem',
        '23.5long': '23.5rem',
        '11.2long': '11.2rem',
      },
      spacing: {
        '11long': '11rem',
        '20long': '20rem',
        '32long': '32rem',
        '34long': '34rem',
      },
      width: {
        '43.5long': '43.5rem',
        '38long': '38rem',
        '23.9long': '23.9rem',
        '18long': '18rem',
        '13.9long': '13.9rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    gridAutoFlow: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
