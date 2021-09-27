import React from 'react'
import Navigation from './Navigation';
import { navTitleField, websiteMasterLogo_Alt } from './navMaster/NavContents.js'
import { noImage } from '../webPages/contentMaster/PageContents.js'

const Header = () => {
    return (
        <header className="bg-header-blue mb-3 pl-3 pr-3 pt-1 pb-28 flex justify-between shadow-lg">
            <h1>
                <span className="font-title pt-3 pl-3 font-bold float-left">
                    <div className="grid grid-cols-1 items-center md:text-2xl">
                        <img
                            src={websiteMasterLogo_Alt}
                            alt={noImage}
                            className="h-12 w-24">
                        </img>
                        {navTitleField.lineOne}
                    </div>
                </span>

                <Navigation />
            </h1>
        </header>
    );
};

export default Header