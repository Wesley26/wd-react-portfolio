/**
 * Content on portfolio webpage is imported from this JS file.
 * NOTE: Each object can carry up to five values, otherwise the string content may not appear on the app. Do NOT
 * assign a variable to an array of objects.
 * 
 * Portfolio Page Images - All image content that can appear on any web page.
 * Portfolio Page Content - Page content that can appear on Portfolio.js
 */

/**
 * //////////////////////////////////////////////// PORTFOLIO PAGE IMAGES //////////////////////////////////////////////////////////////
 */

 import cPlusPlusLogo from "../../images/portfolio_Icon_Images/C++Logo.png"; //C++ Portfolio Item Icon
 import jSLogo from "../../images/portfolio_Icon_Images/JavascriptLogo.png"; //JS Portfolio Item Icon
 import i01MonitorLogo from "../../images/portfolio_Icon_Images/greeni01Monitor.png"; //i01 Related Portfolio Item Icon
 import reactJSLogo from "../../images/portfolio_Icon_Images/ReactJS.png"; //ReactDOM and React Native Portfolio Item Icon
 
 /**
 *  //////////////////////////////////////////////// PORTFOLIO PAGE CONTENT ///////////////////////////////////////////////////////////////////
 *
 *  Note: portfolioTextWeb"n" object variables are for website portfolio items.
 *        portfolioTextPersonal"n" object variables are for personal project portfolio items.
 * 
 *  Each portfolioText object corresponds with an icon image const and a repo link const.
 * 
 *  portfolioRepoForThisSite, and portfolioRepoForThisSiteLink each correspond with the link and text at the top of
 *  the portfolio list webpage. The link takes you to the git repo of this website. Instructions are included
 *  for the end user as to how navigating the portfolio page functions.
 */

const portfolioRepoForThisSite = {
    pRFTS1_1: `To view the entire design for this website, visit`,
    pRFTS1_2: `this following repo.`,
    pRFTS1_3: `While on a Desktop device, use your mouse to roll over each portfolio item to see their content.`,
    pRFTS1_4: `While on a Tablet/Mobile device, touch each portfolio item to see their content.`
    };
const portfolioRepoForThisSiteLink = `https://github.com/Wesley26/wd-react-portfolio`;

/**
 *  Individual portfolio items are declared and listed after this point.
 */

    const portfolioTextMobile1 = {
        titleP3: "Mobile App Portfolio",
        subtitleP3_1: "React Native Weather App",
        subtitleP3_2: "CHOYCES React Native App",
    };

        //Logo used is reactJSLogo
        const m1Link = `https://github.com/Wesley26/weather-App`; //Link corresponds with portfolioTextMobile1.subtitleP3_1

        //Logo used is reactJSLogo
        const m2Link = `https://github.com/Wesley26/ChoycesMobile`; //Link corresponds with portfolioTextMobile1.subtitleP3_2
    
    const portfolioTextWeb1 = {
        titleP1: "Website Portfolio",
        subtitleP1_1: "Website overhaul for Smile Design Dental Office.",
        subtitleP1_2: "BitBroker Coding Challenge.",
    };

        //Logo used is jSLogo
        const w1Link = `https://github.com/Wesley26/GA-Final-Project-Smile-Design`; //Link corresponds with portfolioTextWeb1.subtitleP1_1

        //Logo used is jSLogo
        const w2Link = `https://github.com/Wesley26/bitbroker-challenge`; //Link corresponds with portfolioTextWeb1.subtitleP1_2

    const portfolioTextPersonal1 = {
        titleP2: "Personal Projects",
        subtitleP2_1: "My Personal C++ Shopping Cart application project.",
        subtitleP2_2: "My Personal JavaScript application collection project.",
        subtitleP2_3: "Installation 01 Halo fan game prototype discord bot.",
    };

        const cPlusPlusLink = `https://github.com/Wesley26/ShoppingCart`; //Link corresponds with portfolioTextPersonal1.subtitleP2_1

        const p2Link = `https://github.com/Wesley26/Wesley26.github.io/blob/master/projectTwo.html`; //Link corresponds with portfolioTextPersonal1.subtitleP2_2

        const i01BotLink = `https://github.com/Wesley26/i01-bot-prototype-framework`; //Link corresponds with portfolioTextPersonal1.subtitleP2_3


export {
    //////////////////
    portfolioRepoForThisSite,
    portfolioRepoForThisSiteLink,
    portfolioTextMobile1,
        reactJSLogo,
        m1Link,
        m2Link,
    portfolioTextWeb1,
        w1Link,
        w2Link,
    portfolioTextPersonal1,
        cPlusPlusLogo,
        cPlusPlusLink,
        jSLogo,
        p2Link,
        i01MonitorLogo,
        i01BotLink,
};