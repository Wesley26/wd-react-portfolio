/**
 * //////////////////////////////////////////////// TYPESCRIPT TYPE IMPORTS ////////////////////////////////////////////////////////
 */

import { ALLIMAGES } from "../../globalTypes/interfaces/pageContentInterfaces/AllImages";
import { HOMETEXT } from "../../globalTypes/interfaces/pageContentInterfaces/HomeText";
import { ABOUTTEXT } from "../../globalTypes/interfaces/pageContentInterfaces/AboutText";
import { RESUMETEXT } from "../../globalTypes/interfaces/pageContentInterfaces/ResumeText";
import { APICONTENT } from "../../globalTypes/interfaces/pageContentInterfaces/APIContext";
import { CALCULATORCONTENT } from "../../globalTypes/interfaces/pageContentInterfaces/CalculatorContent";

/**
 * //////////////////////////////////////////////// UNIVERSAL PAGE IMAGE IMPORTS ///////////////////////////////////////////////////
 */

import websiteMasterLogo from "../../images/logoImage/WD_Logo.png"; //Master website logo image.

import philly_P from"../../images/PhillyPA_Portrait.jpg"; //Philly homepage photo for mobile view
import philly_L from "../../images/PhillyPA_Landscape.jpg"; //Philly homepage photo for tablet/desktop view

import wd_About_Photo from "../../images/WesleyP18_V2.jpg"; //Main photo used on about page.
import githubLogo from "../../images/GitHub-Mark-120px-plus.png"; //GitHub Logo
import linkedInLogo from "../../images/linkedin-logo.png"; //LinkedIn Logo

import resumeImg from "../../images/resumeImage/WD_Resume_IMG.png"; //Image version of Resume
import resumePdf from "../../images/resumeImage/WD_Resume_PDF.pdf"; //PDF version of Resume
import letterAImg from "../../images/resumeImage/lettersOfRecommendation/WD_CHOYCES_LOR.png"; //Image version of CHOYCES letter of recommendation
import letterAPdf from "../../images/resumeImage/lettersOfRecommendation/WD_CHOYCES_LOR.pdf"; //PDF version of CHOYCES letter of recommendation
import letterBImg from "../../images/resumeImage/lettersOfRecommendation/WD_ICM_LOR.png"; //Image version of ICM letter of recommendation
import letterBPdf from "../../images/resumeImage/lettersOfRecommendation/WD_ICM_LOR.pdf"; //PDF version of ICM letter of recommendation

/**
 * //////////////////////////////////////////////// UNIVERSAL API IMPORTS /////////////////////////////////////////////////////////
 */

import secrets from '../../clientSecret/secrets.json';

/**
 * Content on every main informational webpage is imported from this TS custom hook.
 * 
 * Universal Page Images - All image content that can appear on any web page.
 * Universal Page Content - Page content that can appear on any web page.
 * Home Page Content - Page content that can appear on Home.js
 * About Page Content - Page content that can appear on About.js
 * Resume Page Content - Page content that can appear on Resume.js
 * Contact Me Page Content - Page content that can appear on ContactMe.js
 * ToDo List Page Content - Page content that can appear on TodoList.js
 * 
 * ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 *  SERVICE_ID, TEMPLATE_ID, USER_ID, and ACCESS_TOKEN are the API key data for EmailJS account access.
 *  ACCESS_TOKEN is on reserve, SERVICE_ID, TEMPLATE_ID, and USER_ID are implemented on ../src/webPages/ContactMe.js
 *  RECAPTCHA_CLIENT_SIDE_KEY is reCaptcha v2 client side key
 *  
 *  NOTE: ../../clientSecret/secrets.json is to NOT be tracked on git for security purposes and must be manually provided.
 * ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 */

const PageContents = () => {

    /**
     * //////////////////////////////////////////////// UNIVERSAL PAGE CONTENT //////////////////////////////////////////////////////////
     */
    const noImage = "Image has failed to load." as string; //Image failed to load message.

    const allImages: ALLIMAGES = {

        masterLogo: websiteMasterLogo,
        phillyPort: philly_P,
        phillyLand: philly_L,
        aboutMePhoto: wd_About_Photo,
        githubLogo: githubLogo,
        linkedInLogo: linkedInLogo,
        resumeImg: resumeImg,
        resumePdf: resumePdf,
        letterAImg: letterAImg,
        letterAPdf: letterAPdf,
        letterBImg: letterBImg,
        letterBPdf: letterBPdf,

    };

    /**
     * //////////////////////////////////////////////// HOME PAGE CONTENT ///////////////////////////////////////////////////////////////////
     */

    const homeText: HOMETEXT = {
            subHeaderH: `Web and Mobile Design: Perfectly Balanced To Meet Your Future Business Image`,
            mainParagraphH: `Are you searching for a new, high-tech, scalable web and/or mobile design to welcome your customers?
                            Do you have software engineers on your current team who specialize behind the scenes, but do 
                            not work as often on what the end-user views? I can help you! Feel free to browse my portfolio 
                            gallery for all the examples of web and mobile design I can provide to your software engineer 
                            team! Use the menu button on the top right of your screen to begin.`,
            captionH: `The photo above was taken in person outside the South-East doorway of the Philadelphia Art Museum overlooking 
                                the famed Rocky Steps in Philadelphia, P.A.`
    };

    /**
     * //////////////////////////////////////////////// ABOUT PAGE CONTENT ///////////////////////////////////////////////////////////////////
     */

    const githubLink = `https://github.com/Wesley26` as string; //GitHub Link

    const linkedInLink = `https://www.linkedin.com/in/wesleydzitzer/` as string; //LinkedIn Link

    const aboutTextTitle = `Gain A Deeper Perspective As To Who I Am As A Person: Meet Wesley Dzitzer` as string; //about page title

    const aboutText: ABOUTTEXT = {
        mainParagraphA_1: `I am a bachelor of science Management Information Systems graduate from Rowan University
                            since May of 2017. At Rowan University, I studied object oriented programming, web design, and
                            database design. My path in my knowledge of different computer languages started with
                            C/C++ and Java. In database design, I studied SQL.`,
        mainParagraphA_2: `After graduation, I began teaching myself the fundamental basics of static 
                            HTML, CSS, and JavaScript using jQuery. Today, I focus on front-end user interface web design using
                            ReactJS for Web and React Native for Mobile. I am also familiar with many other front-end related 
                            JavaScript libraries such as TailwindCSS, PostCSS, and React-Spring to name a few. 
                            My previous work experience includes a PC refresh contract project and one-year technical 
                            customer support position located at Southern New Jersey in the online iGaming casino industry.`,
        mainParagraphA_3: `For more details, visit the GitHub and LinkedIn profile links above.`,
    }; //contains the about description block section

    /**
     *  //////////////////////////////////////////////// RESUME PAGE CONTENT ///////////////////////////////////////////////////////////////////////
     */

    const resumeText: RESUMETEXT = {
            infoR: `To view the full PDF file of my resume and supporting documents, select the download link below.`,
            resumeTitle: `WD_Resume`,
            letterOfRecommendationTitleA: `WD_Letter_Of_Recommendation_A`,
            letterOfRecommendationTitleB: `WD_Letter_Of_Recommendation_B`,
            downloadR: "Download My Resume and Supporting Documents",
    };
    
    const resumeLink = `https://drive.google.com/drive/folders/1Zq6rcMgDz2IeEZCGJr4lKEqATsdVakbW?usp=sharing` as string;
    //Google Drive resume PDF download link

    /**
     *  //////////////////////////////////////////////// CONTACT ME PAGE CONTENT ////////////////////////////////////////////////////////////////////
     */

    const apiContent: APICONTENT = {

        ////////reCaptcha_v2///////////////////////////////////
        recaptchaClientKey: secrets.RECAPTCHA_CLIENT_SIDE_KEY,

    };

    const contactMeHeaderText = "Contact Me" as string; //Contact Me page header text

    /**
     * contactMeInstructions have been simplified
     * down to Email and phone number information.
     */
    const contactMeInstructionsA = `To view my contact information, complete the Google ReCaptcha:` as string;
    const contactMeInstructionsB = `I can be contacted by:` as string;
    const contactMeEmail = `Email: wesdzitzer45@gmail.com` as string;
    const contactMePhone = `Phone: +1 (609) 742-1426` as string;
    const contactMeInstructionsC = `or send me a direct message on my LinkedIn page.` as string;


    /**
     *  //////////////////////////////////////////////// TODO LIST PAGE CONTENT ///////////////////////////////////////////////////////////////////////
     */

    const toDoTitle = "My Development To-do List" as string;
    const placeholderToDoItemText = "Add to-do item" as string;
    const storageText = "Your current locally stored to-do list items: " as string;

    /**
     *  //////////////////////////////////////////////// CALCULATOR PAGE CONTENT //////////////////////////////////////////////////////////////////////
     */

    const calculatorContent: CALCULATORCONTENT = {

        addSign: `+`,
        deleteBTN: `DEL`,
        divideSign: `/`,
        equalsSign: `=`,
        multiplySign: `*`,
        periodSign: `.`,
        subtractSign: `-`,
        zeroSign: 0,
        openCal: `Open Calculator`,
        closeCal: `Close Calculator`,

    };

    return { 
        noImage,
        allImages,
        /////////////////////////
        homeText,
        /////////////////////////
        githubLink,
        linkedInLink,
        aboutTextTitle,
        aboutText,
        /////////////////////////
        resumeText,
        resumeLink,
        /////////////////////////
        contactMeHeaderText,
        apiContent,
        contactMeInstructionsA,
        contactMeInstructionsB,
        contactMeEmail,
        contactMePhone,
        contactMeInstructionsC,
        /////////////////////////
        toDoTitle,
        placeholderToDoItemText,
        storageText,
        /////////////////////////
        calculatorContent,
    };

};

export default PageContents;
