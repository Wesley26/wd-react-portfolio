import { FC } from 'react';
import { Link } from 'react-router-dom';
import NavContents from './navMaster/NavContents';

/**
 * @NavigationMenu - Mobile component version of NavigationMenu.
 * @param props.closeMenu is passed from Web Component Navigation in Navigation.js (line 44).
 * Controls closing nav menu arrow function.
 */

interface NAV_MENU_MOBILE {
    closeMenu: () => void;
};

const NavigationMenu:FC<NAV_MENU_MOBILE> = (props:NAV_MENU_MOBILE) => {

    /*
    * To edit which Navigation Menu pages you have, add a new list item containing
    * the Link you want to name it. Next, go to App.js, and add a new Route with
    * the JSX page content that you want to feature inside.
    */

    const navContentData = NavContents();

    return(
        <div className="font-title sm:absolute sm:text-center sm:px-3 md:px-6 lg:px-12 pb-10 justify-evenly items-center">
            <div className="border-solid border-b-4 border-black md:text-2x1 lg:text-3xl">
                <h3 className="font-semibold">
                    {navContentData.navTitleField1}
                </h3>
                <h3 className="pb-3 font-semibold">
                    {navContentData.navTitleField3}
                </h3>
            </div>
                <ul className="font-title pt-6 pb-12">
                    <li className="pb-2 md:hidden sm:grid">
                    <Link 
                        to="/" 
                        className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                        onClick={props.closeMenu}>{navContentData.navItemOne}</Link>
                    </li>
                    <li className="pt-3 md:hidden sm:grid">
                    <Link 
                        to="/about" 
                        className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                        onClick={props.closeMenu}>{navContentData.navItemTwo}</Link>
                    </li>
                    <li className="pt-3 md:hidden sm:grid">
                    <Link 
                        to="/portfolio" 
                        className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                        onClick={props.closeMenu}>{navContentData.navItemThree}</Link>
                    </li>
                    <li className="pt-3 md:hidden sm:grid">
                    <Link 
                        to="/resume" 
                        className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                        onClick={props.closeMenu}>{navContentData.navItemFour}</Link>
                    </li>
                    <li className="pt-3 md:hidden sm:grid">
                    <Link 
                        to="/contactMe" 
                        className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                        onClick={props.closeMenu}>{navContentData.navItemFive}</Link>
                    </li>
                    <li className="pt-10 pb-3">
                        <p className="text-20e md:text-35e lg:text-35e font-semibold">
                            {navContentData.navAppSplitterText}
                        </p>
                    </li>
                    <li className="pt-3">
                    <Link 
                        to="/todoList" 
                        className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                        onClick={props.closeMenu}>{navContentData.navItemSix}</Link>
                    </li>
                </ul>
            <br>
            </br>
            <div>
                <h3 
                    className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-10 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    onClick={props.closeMenu}
                    >
                    {navContentData.navTitleField2}
                </h3>
            </div>
        </div>
    );
};

export default NavigationMenu;