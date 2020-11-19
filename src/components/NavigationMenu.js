import React from 'react'
import { Link } from 'react-router-dom'
import { navTitleField,
        navItemOne, 
        navItemTwo, 
        navItemThree, 
        navItemFour, 
        navItemFive } from './navMaster/NavContents.js'


/**
 * @param props is passed from Web Component Navigation in Navigation.js (line 48). Controls closing nav menu arrow function.
 */

const NavigationMenu = props => {

    /*
    * To edit which Navigation Menu pages you have, add a new list item containing
    * the Link you want to name it. Next, go to App.js, and add a new Route with
    * the JSX page content that you want to feature inside.
    */

    return(
        <div className="font-title sm:absolute sm:text-center sm:px-3 md:px-6 lg:px-12 justify-evenly items-center">
            <div className="border-solid border-b-4 border-black md:text-2x1 lg:text-3xl">
                <h3 className="font-semibold">
                    {navTitleField.lineOne}
                </h3>
                <h3 className="pb-3 font-semibold">
                    {navTitleField.lineThree}
                </h3>
            </div>
            <ul className="font-title pt-6 pb-12">
                <li className="pb-2">
                <Link 
                    to="/" 
                    className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    onClick={props.closeMenu}>{navItemOne}</Link>
                </li>
                <li className="pt-3">
                <Link 
                    to="/about" 
                    className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    onClick={props.closeMenu}>{navItemTwo}</Link>
                </li>
                <li className="pt-3">
                <Link 
                    to="/portfolio" 
                    className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    onClick={props.closeMenu}>{navItemThree}</Link>
                </li>
                <li className="pt-3">
                <Link 
                    to="/resume" 
                    className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    onClick={props.closeMenu}>{navItemFour}</Link>
                </li>
                <li className="pt-3">
                <Link 
                    to="/contactMe" 
                    className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    onClick={props.closeMenu}>{navItemFive}</Link>
                </li>
            </ul>
            <br>
            </br>
            <div>
                <h3 
                    className="h-20 text-green-600 md:text-3xl lg:text-4xl pt-4 pb-3 block border-black border-solid border-2 rounded-full hover:bg-gray-300 active:bg-gray-400 shadow-lg"
                    onClick={props.closeMenu}
                    >
                    {navTitleField.lineTwo}
                </h3>
            </div>
        </div>
    );
};

export default NavigationMenu