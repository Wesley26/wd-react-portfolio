import React from 'react'
import { Link } from 'react-router-dom'

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
                    Wesley Dzitzer
                <br/>
                    Click outside of this main menu to close.
                </h3>
            </div>
                <br/>
                <br/>
            <ul>
                <li>
                <Link 
                    to="/" 
                    className="text-blue-500 py-3 block border-black border-b border-t"
                    onClick={props.closeMenu}>Home</Link>
                </li>
                <li>
                <Link 
                    to="/about" 
                    className="text-blue-500 py-3 block border-black border-b"
                    onClick={props.closeMenu}>About Me</Link>
                </li>
                <li>
                <Link 
                    to="/portfolio" 
                    className="text-blue-500 py-3 block border-black border-b"
                    onClick={props.closeMenu}>Portfolio Gallery</Link>
                </li>
                <li>
                <Link 
                    to="/resume" 
                    className="text-blue-500 py-3 block border-black border-b"
                    onClick={props.closeMenu}>Resume</Link>
                </li>
                <li>
                <Link 
                    to="/contactMe" 
                    className="text-blue-500 py-3 block border-black border-b"
                    onClick={props.closeMenu}>Contact Me</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavigationMenu