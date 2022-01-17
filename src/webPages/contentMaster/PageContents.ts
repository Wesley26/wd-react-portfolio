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
    
    interface ALLIMAGES {
        masterLogo: string,
        phillyPort: string,
        phillyLand: string,
        aboutMePhoto: string,
        githubLogo: string,
        linkedInLogo: string,
        resumeImg: string,
    };

    const allImages: ALLIMAGES = {

        masterLogo: websiteMasterLogo,
        phillyPort: philly_P,
        phillyLand: philly_L,
        aboutMePhoto: wd_About_Photo,
        githubLogo: githubLogo,
        linkedInLogo: linkedInLogo,
        resumeImg: resumeImg,

    };

    /**
     * //////////////////////////////////////////////// HOME PAGE CONTENT ///////////////////////////////////////////////////////////////////
     */

    interface HOMETEXT {
        subHeaderH: string,
        mainParagraphH: string,
        captionH: string,
    };

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

    interface ABOUTTEXT {
        mainParagraphA_1: string,
        mainParagraphA_2: string,
        mainParagraphA_3: string,
    };

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
        mainParagraphA_3: `For more details, visit the GitHub and LinkedIn profile links below.`,
    }; //contains the about description block section

    /**
     *  //////////////////////////////////////////////// RESUME PAGE CONTENT ///////////////////////////////////////////////////////////////////////
     */

    interface RESUMETEXT {
        infoR: string,
        downloadR: string,
    };

    const resumeText: RESUMETEXT = {
            infoR: `To view the full PDF file of my resume, select the download link at the bottom of this page.`,
            downloadR: "Download My Resume",
    };
    
    const resumeLink = `https://drive.google.com/drive/folders/1Zq6rcMgDz2IeEZCGJr4lKEqATsdVakbW?usp=sharing` as string;
    //Google Drive resume PDF download link

    /**
     *  //////////////////////////////////////////////// CONTACT ME PAGE CONTENT ////////////////////////////////////////////////////////////////////
     */

    interface APICONTENT {
        serviceID: string,
        templateID: string,
        userID: string,
        accessToken: string,
        recaptchaClientKey: string,
    };

    const apiContent: APICONTENT = {

        ///////////EmailJS/////////////////////////////////////
        serviceID: secrets.SERVICE_ID,
        templateID: secrets.TEMPLATE_ID,
        userID: secrets.USER_ID,
        accessToken: secrets.ACCESS_TOKEN,
        ////////reCaptcha_v2///////////////////////////////////
        recaptchaClientKey: secrets.RECAPTCHA_CLIENT_SIDE_KEY,

    };

    const contactMeHeaderText = "Contact Me" as string; //Contact Me page header text

    /**
     * contactMeInstructions A-H are strings that contain
     * each part of the full instructions for the user
     * to complete the contact me page form
     */
    const contactMeInstructionsA = `Thank you for your interest in reaching out to me! Complete
                                    this form to send an email and I will reply.
                                    For my reply to be sent back to you, be sure to include all the
                                    following details on this form:` as string;
    const contactMeInstructionsB = " - This is the subject line of the email I receive." as string;
    const contactMeInstructionsC = " - You enter your full name on this line. You may use your first, last, or full name." as string;
    const contactMeInstructionsD = " - You enter the email you prefer me to reply back to on this line (example: your_email_here@mail.com)." as string;
    const contactMeInstructionsE = " - You enter in your message to me in this text box." as string;
    const contactMeInstructionsF = "Be sure to fill out " as string;
    const contactMeInstructionsG = "ALL" as string;
    const contactMeInstructionsH = ` provided fields below. If the ReCaptcha test
                                    does not appear, refresh this page. You need to verify that you are human
                                    to use this email form. A send button will only appear on the bottom of 
                                    this form if you complete verification.` as string;

    /**
     * commonFormText - contains the most common used word 
     * groups in both the instructions of the form and
     * the form itself
     */
    interface COMMONCONTACTFORMTEXT {
        subjectText: string,
        nameText: string,
        emailText: string,
        messageText: string,
    };

    const commonContactFormText: COMMONCONTACTFORMTEXT = {
            subjectText: "Subject",
            nameText: "Name",
            emailText: "Email",
            messageText: "Message"
    };

    /**
     *  placeholderText - contains the placeholder text
     *  for each space in the form.
     */
    interface PLACEHOLDERTEXT {
        placeSubject: string,
        placeName: string,
        placeEmail: string,
        placeMessage: string,
    };

    const placeholderText: PLACEHOLDERTEXT = {
        placeSubject: "Add A Subject",
        placeName: "Add A Name",
        placeEmail: "email@mail.com",
        placeMessage: "Hello World!",
    };

    /**
     *  //////////////////////////////////////////////// TODO LIST PAGE CONTENT ///////////////////////////////////////////////////////////////////////
     */

    const toDoTitle = "My Development To-do List" as string;
    const placeholderToDoItemText = "Add to-do item" as string;
    const storageText = "Your current locally stored to-do list items: " as string;

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
        contactMeInstructionsC,
        contactMeInstructionsD,
        contactMeInstructionsE,
        contactMeInstructionsF,
        contactMeInstructionsG,
        contactMeInstructionsH,
        commonContactFormText,
        placeholderText,
        /////////////////////////
        toDoTitle,
        placeholderToDoItemText,
        storageText,
    };

};

export default PageContents;
