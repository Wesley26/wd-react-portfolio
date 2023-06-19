/** @type {import('tailwindcss').Config} */

/**
 * Note: All portfolio background images are rendered through "extend" backgroundImage
 *        located on line 16.
 *        The background images must be placed in ./images/portfolio_BG_Images.
 * 
 * All other configurations must be referenced in TailwindCSS's documentation.
 **/

export default {
  content: [ './src/**/**/**/**/**/*.{js,jsx,ts,tsx}' ],
  theme: {
    extend: {
      backgroundImage: {
        ///////////////////////PORTFOLIO BACKGROUND IMAGES////////////////////////////////
        'realWorld_oneA': "url('./images/portfolio_BG_Images/SketchDev1.PNG')",
        'realWorld_oneB': "url('./images/portfolio_BG_Images/SketchDev2.PNG')",
        'realWorld_oneC': "url('./images/portfolio_BG_Images/SketchDev3.PNG')",
        'realWorld_oneD': "url('./images/portfolio_BG_Images/SketchDev4.PNG')",
        'realWorld_oneE': "url('./images/portfolio_BG_Images/SketchDev5.png')",
        'realWorld_oneF': "url('./images/portfolio_BG_Images/SketchDev6.png')",
        'mobile_one': "url('./images/portfolio_BG_Images/iOS_Weather_App.png')",
        'mobile_two': "url('./images/portfolio_BG_Images/CHOYCES_App_Demo_1.PNG')",
        'website_one': "url('./images/portfolio_BG_Images/DrDzitzerWebsite.PNG')",
        'website_two': "url('./images/portfolio_BG_Images/BitBrokerChallenge.PNG')",
        'website_three': "url('./images/portfolio_BG_Images/WD_VIZE.png')",
        'project_one': "url('./images/portfolio_BG_Images/KartersBotScreen.PNG')",
        //////////////////////////////////////////////////////////////////////////////////
      },
      borderRadius: {
        '16pix': '16px',
      },
      flex: {
        '1And33percent': '1 1 33.333%',
      },
      fontFamily: {
        'title': ['Cabin', 'sans-serif'],
        'body': ['Josefin Sans', 'sans-serif'],
        'calculator': ['Fira Sans', 'sans-serif'],
      },
      fontSize: {
        '14e': '14px',
        '20e': '20px',
        '24e': '24px',
        '35e': '35px',
      },
      colors: {
        'header_blue': '#a8dcd4',
        'footer_blue': '#a8dcd4',
        'important_blue': '#a4eac5',
        'body_gray': '#e0dfdf',
        'body_lightGray': '#f7fafc',
        'body_form': '#e2e8f0',
        'cal_primary': '#629e84',
        'cal_secondary': '#8c38ff',
        'cal_tirshiary': '#000000',
        'cal_dark': '#4b695e',
        'cal_light': '#eee',
        'cal_light_altOne': '#FFF',
        'cal_blue': '#5f90c7',
        'cal_hover': '#bdbdbd',
        'cal_active': '#6e6e6e',
      },
      height: {
        '93percent': '93%',
        '85.6long': '85.6rem',
        '51.6long': '51.6rem',
        '30long': '30rem',
        '26.9long': '26.9rem',
        '23.5long': '23.5rem',
        '11.2long': '11.2rem',
        '5.9long': '5.9rem',
      },
      padding: {
        '16pix': '16px',
      },
      spacing: {
        '0.10long': '0.10rem',
        '3.5long': '3.5rem',
        '11long': '11rem',
        '20long': '20rem',
        '32long': '32rem',
        '34long': '34rem',
      },
      maxWidth: {
        '33percent': '33.333%',
        '400pix': '400px',
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
  plugins: [],
}
