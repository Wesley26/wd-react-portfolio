import React from 'react'

let pageCreated = document.lastModified;

function Footer() {
    return (
        <footer className="header-color text-center text-xs p-3 absolute bottom-0 w-full">
            &copy; Copyright {pageCreated}
        </footer>
    );
};

export default Footer