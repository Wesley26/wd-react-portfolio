/**
 * //////////////////////////////////////////////// PORTFOLIO PAGE TYPESCRIPT TYPES ////////////////////////////////////////////////////
 */

import { PORTFOLIOPAGEIMAGES } from "../../globalTypes/interfaces/portfolioPageContent/PortfolioPageImages";
import { PORTFOLIO_REPO_FOR_THIS_SITE } from "../../globalTypes/interfaces/portfolioPageContent/PortfolioRepoForThisSite";
import { PORTFOLIO_TEXT_MOBILE_1 } from "../../globalTypes/interfaces/portfolioPageContent/PortfolioTextMobile1";
import { PORTFOLIO_TEXT_WEB_1 } from "../../globalTypes/interfaces/portfolioPageContent/PortfolioTextWeb1";
import { PORTFOLIO_TEXT_PERSONAL_1 } from "../../globalTypes/interfaces/portfolioPageContent/PortfolioTextPersonal1";

/**
 * Content on portfolio webpage is imported from this custom hook file.
 * 
 * Portfolio Page Images - All image content that can appear on any web page.
 * Portfolio Page Content - Page content that can appear on Portfolio.js
 */

/**
 * //////////////////////////////////////////////// PORTFOLIO PAGE IMAGES //////////////////////////////////////////////////////////////
 */

import jSLogo from "../../images/portfolio_Icon_Images/JavascriptLogo.png"; //JS Portfolio Item Icon
import reactJSLogo from "../../images/portfolio_Icon_Images/ReactJS.png"; //React JS/TS Portfolio Item Icon
import tSLogo from "../../images/portfolio_Icon_Images/Typescript.png"; //TS Portfolio Item Icon

const PortfolioPageContents = () => {

    const portfolioPageImages: PORTFOLIOPAGEIMAGES = {

        jSLogo: jSLogo,
        reactJSLogo: reactJSLogo,
        tSLogo: tSLogo,

    };
 
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

    const portfolioRepoForThisSite: PORTFOLIO_REPO_FOR_THIS_SITE = {
        pRFTS1_1: `To view the entire design for this website, visit`,
        pRFTS1_2: `this following repo.`,
        pRFTS1_3: `Use the navigation arrows below to view each portfolio item.`,
        pRFTS1_4: `A project with a publicly viewable GitHub repository includes a 
        clickable link to the corresponding repository.`,
        pRFTS1_5: `A project that does not contain a public repository includes a
        screenshot gallery and description.`,
    };

    const portfolioRepoForThisSiteLink = `https://github.com/Wesley26/wd-react-portfolio` as string;

    /**
     *  Individual portfolio items are declared and listed after this point.
     */

    const portfolioTextMobile1: PORTFOLIO_TEXT_MOBILE_1 = {
        titleP3: "React Native Expo Framework Mobile App",
        titleP4: "React Native CLI Mobile App",
        subtitleP3_1: "Weather Utility App GitHub Repository",
        subtitleP3_2: "CHOYCES Mobile App GitHub Repository",
        ////////////////////////Text for Sketch/Eastman Project ///////////////////////////////////
        realWorldProjectText1A1: `Sketch Development/Eastman Chemical Company Mobile App`,
        realWorldProjectText1A2: `All screens shown below were built by me from a Figma design.
        The mobile app started as a vanilla JavaScript React Native app. The mobile app received
        a TypeScript upgrade in the last week of its development period. This React Native mobile
        app, compatible for both iOS and Android, is designed for internal use with one of
        Eastman Chemical Company's vehicle trim vendor clients.`,
        realWorldProjectText2: `Android: No vehicle VIN ID found page`,
        realWorldProjectText3: `iOS: No vehicle VIN ID found page`,
        realWorldProjectText4: `Android: Vehicle Lookup selection screen`,
        realWorldProjectText5: `iOS: Vehicle Lookup selection screen`,
        realWorldProjectText6: `iOS: My Shop Notes empty state page`,
        realWorldProjectText7: `iOS: Select Model page with PPF/Tint options`,
    };

    //Logo used is reactJSLogo
    const m1Link = `https://github.com/Wesley26/weather-App` as string; //Link corresponds with portfolioTextMobile1.subtitleP3_1

    //Logo used is reactJSLogo
    const m2Link = `https://github.com/Wesley26/ChoycesMobile` as string; //Link corresponds with portfolioTextMobile1.subtitleP3_2

    const portfolioTextWeb1: PORTFOLIO_TEXT_WEB_1 = {
        titleP1: "Vanilla HTML CSS3 JavaScript Website",
        titleP2: "ReactJS Website",
        titleP3: "TypeScript React Website",
        subtitleP1_1: "Smile Design Dental Office Website and GitHub Repository",
        subtitleP1_2: "BitBroker Coding Challenge GitHub Repository",
        subtitleP1_3: "Vize College Prep Coding Challenge GitHub Repository",
    };

    //Logo used is jSLogo
    const w1Link = `https://github.com/Wesley26/GA-Final-Project-Smile-Design` as string; //Link corresponds with portfolioTextWeb1.subtitleP1_1

    //Logo used is jSLogo
    const w2Link = `https://github.com/Wesley26/bitbroker-challenge` as string; //Link corresponds with portfolioTextWeb1.subtitleP1_2

    //Logo used is reactJSLogo
    const w3Link = `https://github.com/Wesley26/wd_vize` as string; ////Link corresponds with portfolioTextWeb1.subtitleP1_3

    const portfolioTextPersonal1: PORTFOLIO_TEXT_PERSONAL_1 = {
        titleP1: "Personal TypeScript Project",
        subtitleP2_1: "'The Karters' Arcade Kart racing game community Discord Bot GitHub Repository",
    };

    //Logo used is tSLogo
    const p1Link = `https://github.com/adelansari/karters-bot` as string; //Link corresponds with portfolioTextPersonal1.subtitleP2_1


    return {
        portfolioPageImages,
        ///////////////////////////////
        portfolioRepoForThisSite,
        portfolioRepoForThisSiteLink,
        portfolioTextMobile1,
            m1Link,
            m2Link,
        portfolioTextWeb1,
            w1Link,
            w2Link,
            w3Link,
        portfolioTextPersonal1,
            p1Link,
    };

};

export default PortfolioPageContents;
