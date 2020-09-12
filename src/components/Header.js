import React from 'react'
import Navigation from './Navigation';

function Header() {
    return (
        <header className="bg-header-blue border-b p-3 flex justify-between">
            <h1>
                <span className="font-bold float-left">
                    Wesley Dzitzer
                </span>

                <Navigation />
            </h1>
        </header>
    );
};

export default Header