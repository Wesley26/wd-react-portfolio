/**
 * Content on every informational webpage is imported from this JS file.
 * NOTE: Each object can carry up to five values, otherwise the string content may not appear on the app. Do NOT
 * assign a variable to an array of objects.
 * 
 * Universal Page Content - Page content that can appear on any web page.
 * Home Page Content - Page content that can appear on Home.js
 * About Page Content - Page content that can appear on About.js
 * Portfolio Page Content - Page content that can appear on Portfolio.js
 * Resume Page Content - Page content that can appear on Resume.js
 * Contact Me Page Content - Page content that can appear on ContactMe.js
 */

/**
 * //////////////////////////////////////////////// UNIVERSAL PAGE CONTENT //////////////////////////////////////////////////////////////
 */

const noImage = "Image has failed to load."; //Image failed to load message.

/**
 * //////////////////////////////////////////////// HOME PAGE CONTENT ///////////////////////////////////////////////////////////////////
 */

const homeText = {
                subHeaderH: `Hello there! Welcome to my corner of online web development.`,
                mainParagraphH: `Feel free to take a look around. You are currently viewing my home page. The about page contains more
                information about me and my developer background.`
                }; 

/**
 * //////////////////////////////////////////////// ABOUT PAGE CONTENT ///////////////////////////////////////////////////////////////////
 */
const aboutText = {
                titleA: "Hello World! Meet Wesley Dzitzer",
                mainParagraphA: `Wesley Dzitzer is a bachelor of science Managment Information Systems graduate from Rowan University
                                since May of 2017. At Rowan University, Wesley studied object oriented programming, web design, and
                                database design. His knowledge of programming languages include C++ and Java. In web design his
                                knowledge includes HTML, CSS, and Java Script. In database design, Wesley is most familiar with SQL. 
                                Wesley's previous work experience includes a PC refresh contract project and one-year technical customer 
                                support position located at southern  New Jersey in the online iGaming casino industry. For more 
                                information, feel free to visit the LinkedIn and GitHub profile links.`
                };
/**
 *  //////////////////////////////////////////////// PORTFOLIO PAGE CONTENT ///////////////////////////////////////////////////////////////////
 */

const portfolioTextWeb1 = {
                titleP1: "Website Portfolio",
                subtitleP1_1: "Website overhaul for Smile Design Dental Office.",
                };

const portfolioTextPersonal1 = {
                titleP2: "Personal Projects",
                subtitleP2_1: "My Personal C++ Shopping Cart application project.",
                subtitleP2_2: "My Personal Javascript application collection project.",
                subtitleP2_3: "Installation 01 Halo fan game prototype discord bot.",
                };

/**
 *  //////////////////////////////////////////////// RESUME PAGE CONTENT ///////////////////////////////////////////////////////////////////
 */

/**
 *  //////////////////////////////////////////////// CONTACT ME PAGE CONTENT ///////////////////////////////////////////////////////////////////
 */

module.exports = {
    noImage,
    homeText,
    aboutText,
    portfolioTextWeb1,
    portfolioTextPersonal1,
};