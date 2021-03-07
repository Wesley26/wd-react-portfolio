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
 * ToDo List Page Content - Page content that can appear on TodoList.js
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
                subHeaderH: `Front-End User Interface Design: Perfectly Balanced To Meet Your Future Business Image`,
                mainParagraphH: `Are you searching for a new, high-tech, scalable wesbite design to welcome your customers?
                                Do you have website developers on your current team who specialize behind the scenes, but do 
                                not work as often on what the end-user views? I can help you! Feel free to browse my portfolio 
                                gallery for all the examples of user interface design I can provide to your website development 
                                team! Use the menu button on the top right of your screen to begin.`,
                captionH: `The photo above was taken in person outside the South-East doorway of the Philadelphia Art Museum overlooking 
                            the famed Rocky Steps in Philadelphia, P.A.`
                }; 

/**
 * //////////////////////////////////////////////// ABOUT PAGE CONTENT ///////////////////////////////////////////////////////////////////
 */

const wd_About_Photo = require("../../images/WesleyP18_V2.jpg"); //Main photo used on about page.

const githubLink = `https://github.com/Wesley26`; //GitHub Link
const githubLogo = require("../../images/GitHub-Mark-120px-plus.png"); //GitHub Logo

const linkedInLink = `https://www.linkedin.com/in/wesleydzitzer/`; //LinkedIn Link
const linkedInLogo = require("../../images/linkedin-logo.png"); //LinkedIn Logo

const aboutTextTitle = `Gain A Deeper Perspective As To Who I Am As A Person: Meet Wesley Dzitzer`; //about page title

const aboutText = {
                mainParagraphA_1: `I am a bachelor of science Management Information Systems graduate from Rowan University
                                since May of 2017. At Rowan University, I studied object oriented programming, web design, and
                                database design. My path in my knowledge of different computer languages started with
                                C/C++ and Java. In database design, I studied SQL.`,
                mainParagraphA_2: `After graduation, I began teaching myself the fundamental basics of static 
                                HTML, CSS, and JavaScript using jQuery. Today, I focus on front-end user interface web design using
                                ReactJS. I am also familiar with many other front-end related JavaScript libraries such as
                                TailwindCSS, PostCSS, and React-Spring to name a few. My previous work experience includes 
                                a PC refresh contract project and one-year technical customer support position located at 
                                Southern New Jersey in the online iGaming casino industry.`,
                mainParagraphA_3: `For more details, visit the GitHub and LinkedIn profile links below.`,
                }; //contains the about description block section

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
                subtitleP2_2: "My Personal Javascript application collection project.",
                subtitleP2_3: "Installation 01 Halo fan game prototype discord bot.",
                };

    const cPlusPlusLogo = require("../../images/portfolio_Icon_Images/C++Logo.png"); //C++ Portfolio Item Icon
    const cPlusPlusLink = `https://github.com/Wesley26/ShoppingCart`; //Link corresponds with portfolioTextPersonal1.subtitleP2_1

    const jSLogo = require("../../images/portfolio_Icon_Images/JavascriptLogo.png"); //JS Portfolio Item Icon
    const p2Link = `https://github.com/Wesley26/Wesley26.github.io/blob/master/projectTwo.html`; //Link corresponds with portfolioTextPersonal1.subtitleP2_2

    const i01MonitorLogo = require("../../images/portfolio_Icon_Images/greeni01Monitor.png"); //i01 Related Portfolio Item Icon
    const i01BotLink = `https://github.com/Wesley26/i01-bot-prototype-framework`; //Link corresponds with portfolioTextPersonal1.subtitleP2_3


/**
 *  //////////////////////////////////////////////// RESUME PAGE CONTENT ///////////////////////////////////////////////////////////////////////
 */

const resumeText = {
                infoR: `To view the full PDF file of my resume, select the download link at the bottom of this page.`,
                downloadR: "Download My Resume",
                };
    
    const resumeImg = require("../../images/resumeImage/WD_Resume_IMG.png"); //Image version of Resume
    const resumeLink = `https://drive.google.com/drive/folders/1Zq6rcMgDz2IeEZCGJr4lKEqATsdVakbW?usp=sharing`; //Google Drive resume PDF download link

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
                                    this form to send an email and I will reply.
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
     *  placeholderText - contains the placeholder text
     *  for each space in the form.
     */
    const placeholderText = {
                        placeSubject: "Add A Subject",
                        placeName: "Add A Name",
                        placeEmail: "email@mail.com",
                        placeMessage: "Hello World!",
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

/**
 *  //////////////////////////////////////////////// TODO LIST PAGE CONTENT ///////////////////////////////////////////////////////////////////////
 */

const toDoTitle = "My Development To-do List";
const placeholderToDoItemText = "Add to-do item";

export {
    noImage,
    websiteMasterLogo,
    //////////////////
    philly_P,
    philly_L,
    homeText,
    //////////////////
    wd_About_Photo,
    githubLink,
    githubLogo,
    linkedInLink,
    linkedInLogo,
    aboutTextTitle,
    aboutText,
    //////////////////
    portfolioRepoForThisSite,
    portfolioRepoForThisSiteLink,
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
        placeholderText,
        //////////////
        SERVICE_ID,
        TEMPLATE_ID,
        USER_ID,
        ACCESS_TOKEN,
        //////////////
        RECAPTCHA_CLIENT_SIDE_KEY,
    //////////////////
    toDoTitle,
    placeholderToDoItemText,
};