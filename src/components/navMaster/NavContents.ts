import { NAV_CONTENT_DATA } from "../../globalTypes/interfaces/navInterfaces/NavContentData";
import websiteMasterLogo_Alt from "../../images/logoImage/WD_Logo_Alt.png";

/**
 * Custom Hook Content on every navigational webpage except footer is imported
 * from this TS file.
 * 
 * navTitleField - Object contains title text for nav menu.
 * navItem(One to Five) - Strings that contain the text for each Nav Item.
 */

const NavContents = () => {

    const navContentData: NAV_CONTENT_DATA = {
        /////////////////////////// UNIVERSAL TITLE IMAGE CONTENT /////////////////////////
        masterLogoAlt: websiteMasterLogo_Alt, //Nav bar alternate version of logo page.
        /////////////////////////// UNIVERSAL TITLE PAGE CONTENT //////////////////////////
        navTitleField1: "Wesley Dzitzer",
        navTitleField2: "Close Menu",
        navTitleField3: "Let's Build A New Era Together",
        /////////////////////////// NAVIGATIONAL PAGE CONTENT /////////////////////////////
        navAppSplitterText: "Apps",
        navItemOne: "Home",
        navItemTwo: "About Me",
        navItemThree: "Portfolio Gallery",
        navItemFour: "Resume",
        navItemFive: "Contact Me",
        navItemSix: "To-do List",
        navItemSeven: "Calculator",
    };

    return navContentData;

};

export default NavContents;
