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
const websiteMasterLogo = require("../../images/logoImage/WD_Logo.png"); //Master website logo image.

/**
 * //////////////////////////////////////////////// HOME PAGE CONTENT ///////////////////////////////////////////////////////////////////
 */

const philly_P = require("../../images/PhillyPA_Portrait.jpg"); //Philly homepage photo for mobile view
const philly_L = require("../../images/PhillyPA_Landscape.jpg"); //Philly homepage photo for tablet/desktop view

const homeText = {
                subHeaderH: `Hello there! Welcome to my corner of online web development.`,
                mainParagraphH: `Feel free to take a look around. You are currently viewing my home page. The about page contains more
                information about me and my developer background.`,
                captionH: `The photo above was taken in person outside the South-East doorway of the Philladelphia Art Museum overlooking 
                            the famed Rocky Steps in Philladelphia, P.A.`
                }; 

/**
 * //////////////////////////////////////////////// ABOUT PAGE CONTENT ///////////////////////////////////////////////////////////////////
 */

const wd_About_Photo = require("../../images/WesleyP18_V2.jpg"); //Main photo used on about page.
const githubLogo = require("../../images/GitHub-Mark-120px-plus.png"); //GitHub Logo
const linkedInLogo = require("../../images/linkedin-logo.png"); //LinkedIn Logo

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
 *
 *  Note: portfolioTextWeb"n" object variables are for website portfolio items.
 *        portfolioTextPersonal"n" object variables are for personal project portfolio items.
 * 
 *  Each portfolioText object cooresponds with an icon image const and a repo link const.
 * 
 *  portfolioRepoForThisSite, and portfolioRepoForThisSiteLink each coorespond with the link and text at the top of
 *  the portfolio list webpage. The link takes you to the git repo of this website.
 */

const portfolioRepoForThisSite = {
                                pRFTS1_1: `To view the entire design for this website, visit`,
                                pRFTS1_2: `this following repo.`
                                };
const portfolioRepoForThisSiteLink = `https://github.com/Wesley26/wd-react-portfolio`;

    /**
     *  Individual portfolio items are declared and listed after this point.
     */

const portfolioTextWeb1 = {
                titleP1: "Website Portfolio",
                subtitleP1_1: "Website overhaul for Smile Design Dental Office.",
                };
    
    //Logo used is jSLogo
    const w1Link = `https://github.com/Wesley26/GA-Final-Project-Smile-Design`; //Link cooresponds with portfolioTextWeb1.subtitleP1_1

const portfolioTextPersonal1 = {
                titleP2: "Personal Projects",
                subtitleP2_1: "My Personal C++ Shopping Cart application project.",
                subtitleP2_2: "My Personal Javascript application collection project.",
                subtitleP2_3: "Installation 01 Halo fan game prototype discord bot.",
                };

    const cPlusPlusLogo = require("../../images/portfolio_Icon_Images/C++Logo.png"); //C++ Portfolio Item Icon
    const cPlusPlusLink = `https://github.com/Wesley26/ShoppingCart`; //Link cooresponds with portfolioTextPersonal1.subtitleP2_1

    const jSLogo = require("../../images/portfolio_Icon_Images/JavascriptLogo.png"); //JS Portfolio Item Icon
    const p2Link = `https://github.com/Wesley26/Wesley26.github.io/blob/master/projectTwo.html`; //Link cooresponds with portfolioTextPersonal1.subtitleP2_2

    const i01MonitorLogo = require("../../images/portfolio_Icon_Images/greeni01Monitor.png"); //i01 Related Portfolio Item Icon
    const i01BotLink = `https://github.com/Wesley26/i01-bot-prototype-framework`; //Link cooresponds with portfolioTextPersonal1.subtitleP2_3


/**
 *  //////////////////////////////////////////////// RESUME PAGE CONTENT ///////////////////////////////////////////////////////////////////////
 */

const resumeText = {
                infoR: `To view the full PDF file of my resume, select the download link at the bottom of this page.`,
                downloadR: "Download My Resume",
                };
    
    const resumeImg = require("../../images/resumeImage/WD_Resume_IMG.png"); //Image version of Resume
    const resumeLink = `https://drive.google.com/file/d/1nUh4co4WAaiHz_6Ja6AQJLeiw4Qcy7MA/view?usp=sharing`; //Google Drive resume PDF download link

/**
 *  //////////////////////////////////////////////// CONTACT ME PAGE CONTENT ////////////////////////////////////////////////////////////////////
 */

const contactMeHeaderText = "Contact Me"; //Contact Me page header text

    /**
     * contactMeInstructions A-H are strings that contain
     * each part of the full instructions for the user
     * to complete the contact me page form
     */
    const contactMeInstructionsA = `Thank you for your interest in reaching out to me! Complete
                                    this form to send an email and I will return a reply.
                                    For my reply to be sent back to you, be sure to include all the
                                    following details on this form:`;
    const contactMeInstructionsB = " - This is the subject line of the email I receive.";
    const contactMeInstructionsC = " - You enter your full name on this line. You may use your first, last, or full name.";
    const contactMeInstructionsD = " - You enter the email you prefer me to reply back to on this line (example: your_email_here@mail.com).";
    const contactMeInstructionsE = " - You enter in your message to me in this text box.";
    const contactMeInstructionsF = "Be sure to fill out ";
    const contactMeInstructionsG = "ALL";
    const contactMeInstructionsH = ` provided fields below. If the ReCaptcha test
                                    does not appear, refresh this page. You need to verify that you are human
                                    to use this email form. A send button will only appear on the bottom of 
                                    this form if you complete verification.`;

    /**
     * commonFormText - contains the most common used word 
     * groups in both the instructions of the form and
     * the form itself
     */
    const commonContactFormText = {
                            subjectText: "Subject",
                            nameText: "Name",
                            emailText: "Email",
                            messageText: "Message"
                        };

    /**
     *  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     *  SERVICE_ID, TEMPLATE_ID, USER_ID, and ACCESS_TOKEN are the API key data for EmailJS account access.
     *  ACCESS_TOKEN is on reserve, SERVICE_ID, TEMPLATE_ID, and USER_ID are implemented on ../src/webPages/ContactMe.js
     *  RECAPTCHA_CLIENT_SIDE_KEY is reCaptcha v2 client side key
     *  
     *  NOTE: ../../clientSecret/secrets.json is to NOT be tracked on git for security purposes and must be manually provided.
     *  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     */
    const {
        ///////////EmailJS////////
        SERVICE_ID,
        TEMPLATE_ID,
        USER_ID,
        ACCESS_TOKEN,
        ////////reCaptcha_v2///////
        RECAPTCHA_CLIENT_SIDE_KEY,
    } = require("../../clientSecret/secrets.json");

module.exports = {
    noImage,
    websiteMasterLogo,
    //////////////////
    philly_P,
    philly_L,
    homeText,
    //////////////////
    wd_About_Photo,
    githubLogo,
    linkedInLogo,
    aboutText,
    //////////////////
    portfolioRepoForThisSite,
    portfolioRepoForThisSiteLink,
    portfolioTextWeb1,
        w1Link,
    portfolioTextPersonal1,
        cPlusPlusLogo,
        cPlusPlusLink,
        jSLogo,
        p2Link,
        i01MonitorLogo,
        i01BotLink,
    //////////////////
    resumeText,
        resumeImg,
        resumeLink,
    //////////////////
    contactMeHeaderText,
        ////////////////////////
        contactMeInstructionsA,
        contactMeInstructionsB,
        contactMeInstructionsC,
        contactMeInstructionsD,
        contactMeInstructionsE,
        contactMeInstructionsF,
        contactMeInstructionsG,
        contactMeInstructionsH,
        ////////////////////////
        commonContactFormText,
        //////////////
        SERVICE_ID,
        TEMPLATE_ID,
        USER_ID,
        ACCESS_TOKEN,
        //////////////
        RECAPTCHA_CLIENT_SIDE_KEY,
};