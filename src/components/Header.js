import React from 'react'
import Navigation from './Navigation';
import { navTitleField, websiteMasterLogo_Alt } from './navMaster/NavContents.js'
import { noImage } from '../webPages/contentMaster/PageContents.js'

function Header() {
    return (
        <header className="bg-header-blue border-b mb-3 p-3 flex justify-between">
            <h1>
                <span className="font-bold float-left">
                    <div className="grid grid-cols-1 items-center">
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