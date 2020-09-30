import React from 'react'
import Navigation from './Navigation';
import { navTitleField } from './navMaster/NavContents.js'

function Header() {
    return (
        <header className="bg-header-blue border-b mb-3 p-6 flex justify-between">
            <h1>
                <span className="font-bold float-left">
                    {navTitleField.lineOne}
                </span>

                <Navigation />
            </h1>
        </header>
    );
};

export default Header