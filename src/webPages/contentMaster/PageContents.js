/**
 * Content on every individual webpage is imported from this JS file.
 * 
 * Universal Page Content - Page content that can appear on any web page.
 * Home Page Content - Page content that can appear on Home.js
 * About Page Content - Page content that can appear on About.js
 * Portfolio Page Content - Page content that can appear on Portfolio.js
 */

/**
 * //////////////////////////////////////////////// UNIVERSAL PAGE CONTENT //////////////////////////////////////////////////////////////
 */

let noImage = "Image has failed to load."; //Image failed to load message.

/**
 * //////////////////////////////////////////////// HOME PAGE CONTENT ///////////////////////////////////////////////////////////////////
 */
let homeText = {
                subHeaderH: `Hello there! Welcome to my corner of online web development.`,
                mainParagraphH: `Feel free to take a look around. You are currently viewing my home page. The about page contains more
                information about me and my developer background.`
                }; 

/**
 * //////////////////////////////////////////////// ABOUT PAGE CONTENT ///////////////////////////////////////////////////////////////////
 */
let aboutText = {
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
let portfolioText = {
                titleP: "Portfolio Content",
                subtitle1: "My Personal C++ Shopping Cart application project."
                };

module.exports = {
    noImage,
    homeText,
    aboutText,
    portfolioText, 
};