import React from 'react'

let pageCreated = document.lastModified;

function Footer() {
    return (
        <footer className="bg-footer-blue text-center text-xs p-3 fixed bottom-0 w-full">
            &copy; Copyright {pageCreated}
        </footer>
    );
};

export default Footer