import React from 'react'
import { copyrightText, currentYear, theTime } from './navMaster/NavContents.js'

function Footer() {
    return (
        <footer className="bg-footer-blue text-center text-xs p-3 fixed bottom-0 w-full">
            &copy; {copyrightText} {currentYear}
            <br>
            </br>
            {theTime}
        </footer>
    );
};

export default Footer