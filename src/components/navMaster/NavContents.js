/**
 * Content on every navigational webpage except footer is imported from this JS file.
 * NOTE: Each object can carry up to five values, otherwise the string content may not appear on the app. Do NOT
 * assign a variable to an array of objects.
 * 
 * navTitleField - Object contains title text for nav menu.
 * navItem(One to Five) - Strings that contain the text for each Nav Item.
 */

/**
 * //////////////////////////////////////////////// UNIVERSAL TITLE IMAGE CONTENT ///////////////////////////////////////////////////////////
 */

import websiteMasterLogo_Alt from "../../images/logoImage/WD_Logo_Alt.png"; //Nav bar alternate version of logo page.

/**
 * //////////////////////////////////////////////// UNIVERSAL TITLE PAGE CONTENT ///////////////////////////////////////////////////////////
 */

const navTitleField = {
    lineOne: "Wesley Dzitzer",
    lineTwo: "Close Menu",
    lineThree: "Let's Build A New Era Together",
};

/**
 * //////////////////////////////////////////////// NAVIGATIONAL PAGE CONTENT //////////////////////////////////////////////////////////////
 */

const navAppSplitterText = "Apps";

const navItemOne = "Home";
const navItemTwo = "About Me";
const navItemThree = "Portfolio Gallery";
const navItemFour = "Resume";
const navItemFive = "Contact Me";
const navItemSix = "To-do List";

export {
    websiteMasterLogo_Alt,
    navTitleField,
    //////////////////////////
    navAppSplitterText,
    navItemOne,
    navItemTwo,
    navItemThree,
    navItemFour,
    navItemFive,
    navItemSix,
};