import React from 'react'
import { Link } from 'react-router-dom'
import { navTitleField,
        navItemOne, 
        navItemTwo, 
        navItemThree, 
        navItemFour, 
        navItemFive } from './navMaster/NavContents.js'


/**
 * @param props is passed from Web Component Navigation in Navigation.js (line 64). Controls closing nav menu arrow function.
 */

function NavigationMenu(props) {

    /*
    * To edit which Navigation Menu pages you have, add a new list item containing
    * the Link you want to name it. Next, go to App.js, and add a new Route with
    * the JSX page content that you want to feature inside.
    */

    return(
        <div className="sm:absolute sm:pl-3 sm:text-center sm:pr-3 md:absolute md:pl-12 md:text-center md:pr-3 lg:absolute lg:pl-20 lg:text-center lg:px-3 xl:absolute xl:pl-20 xl:text-center xl:px-3">
            <div>
                <h3 className="font-semibold">
                    {navTitleField.lineOne}
                <br/>
                    {navTitleField.lineTwo}
                </h3>
            </div>
                <br/>
                <br/>
            <ul>
                <li>
                <Link 
                    to="/" 
                    className="text-green-600 md:text-3xl lg:text-4xl py-3 block border-black border-b border-t rounded-full hover:bg-gray-400"
                    onClick={props.closeMenu}>{navItemOne}</Link>
                </li>
                <li>
                <Link 
                    to="/about" 
                    className="text-green-600 md:text-3xl lg:text-4xl py-3 block border-black border-b rounded-full hover:bg-gray-400"
                    onClick={props.closeMenu}>{navItemTwo}</Link>
                </li>
                <li>
                <Link 
                    to="/portfolio" 
                    className="text-green-600 md:text-3xl lg:text-4xl py-3 block border-black border-b rounded-full hover:bg-gray-400"
                    onClick={props.closeMenu}>{navItemThree}</Link>
                </li>
                <li>
                <Link 
                    to="/resume" 
                    className="text-green-600 md:text-3xl lg:text-4xl py-3 block border-black border-b rounded-full hover:bg-gray-400"
                    onClick={props.closeMenu}>{navItemFour}</Link>
                </li>
                <li>
                <Link 
                    to="/contactMe" 
                    className="text-green-600 md:text-3xl lg:text-4xl py-3 block border-black border-b rounded-full hover:bg-gray-400"
                    onClick={props.closeMenu}>{navItemFive}</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavigationMenu