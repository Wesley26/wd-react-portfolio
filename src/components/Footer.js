import React from 'react'
import { copyrightText, currentYear, theTime } from './navMaster/NavContents.js'

function Footer() {
    return (
        <div>
            <footer className="bg-footer-blue border-solid border-gray-400 border-b-4 border-l-4 border-r-4 text-center text-xs p-3 fixed bottom-0 w-full shadow-lg">
                &copy; {copyrightText} {currentYear}
                <br>
                </br>
                {theTime}
            </footer>
        </div>
    );
};

export default Footer