import React, { useEffect, useState } from 'react';

/**
 * @useCurrentTime - Custom React Hook which displays
 * the current time.
 * @returns - Website's footer web component with
 * full year and the full time in 12 hour format
 * converted to local time string.
 */

const useCurrentTimeForFooter = () => {

    const copyrightText = `Copyright 2020 - `;
    const currentDateText = `The current date of server is: `;
    const currentTimeText = `The current time of server is: `;

    /**
     * @date - useState hook which stores live JS Date
     */
    const [date, setDate] = useState(new Date());

    useEffect(() => {

        let timerID = setInterval(() => tick(), 1000); //live Date ticking every second

        document.footer = timerID; //update web document footer with ticking clock
        
    }, []);

    let tick = () => {
        setDate(new Date());
    };

    //console.log(date.toLocaleTimeString()); //Uncomment to print the time

    return (

        <footer className="font-body bg-footer-blue border-solid border-gray-300 border-b-4 border-l-4 border-r-4 text-center text-s p-3 fixed bottom-0 w-full shadow-lg">

            &copy; {`${copyrightText} ${date.getFullYear()}`}
            <br>
            </br>
            {`${currentDateText} ${date.toLocaleDateString()}`}
            <br>
            </br>    
            {`${currentTimeText}${date.toLocaleTimeString()}`}

        </footer>

    );

};

export default useCurrentTimeForFooter;