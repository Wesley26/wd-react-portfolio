/**
 * Content on every navigational webpage is imported from this JS file.
 * NOTE: Each object can carry up to five values, otherwise the string content may not appear on the app. Do NOT
 * assign a variable to an array of objects.
 * 
 * navTitleField - Object contains title text for nav menu.
 * navItem(One to Five) - Strings that contain the text for each Nav Item.
 */

/**
 * //////////////////////////////////////////////// UNIVERSAL TITLE PAGE CONTENT ///////////////////////////////////////////////////////////
 */

const navTitleField = {
    lineOne: "Wesley Dzitzer",
    lineTwo: "Click outside of this main menu to close.",
};

/**
 * //////////////////////////////////////////////// NAVIGATIONAL PAGE CONTENT //////////////////////////////////////////////////////////////
 */

const navItemOne = "Home";
const navItemTwo = "About Me";
const navItemThree = "Portfolio Gallery";
const navItemFour = "Resume";
const navItemFive = "Contact Me";

/**
 * //////////////////////////////////////////////// FOOTER PAGE CONTENT ////////////////////////////////////////////////////////////////////
 */

const copyrightText = "Copyright";

let currentTime = new Date(); //Current date for this react app.
let currentYear = currentTime.getFullYear();

let clockTime = currentTime => {

    /**
     * clockTime function passes in the full time from currentTime.
     * 
     * hour - current hour
     * minute - current minute
     * second - current second
     * AMPM - prints out AM or PM time of day
     * currentLocalHours - current Time after calculating the hours, minutes, and seconds.
     */

    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let AMPM = "A.M.";

    if (hour > 11) { 
        AMPM = "P.M."; 
    };
    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour === 0) {
        hour = 12;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    let currentLocalHours = "The current time of server is: " + hour + " : " + minute + 
                        " : " + second + " " + AMPM;
    return currentLocalHours;
};

let theTime = clockTime(currentTime);

module.exports = {
    navTitleField,
    //////////////////////////
    navItemOne,
    navItemTwo,
    navItemThree,
    navItemFour,
    navItemFive,
    //////////////////////////
    copyrightText,
    currentYear,
    theTime,
};

