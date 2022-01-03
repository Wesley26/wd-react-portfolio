import { useEffect, useState } from 'react';

/**
 * @useCurrentTimeForFooter - Custom React Hook which displays
 * the current time.
 * @returns - The date ticking every second.
 */

const useCurrentTime = () => {

    /**
     * @date - useState hook which stores live JS Date
     */
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {

        let timerID = setInterval(() => tick(), 1000) as unknown; //live Date ticking every second

        if (timerID) {}; //keep the TS compiler happy
        
    }, []);

    const tick = () => {
        setDate(new Date()); //advance the time with a new date one second, every second
    };

    return date;

};

export default useCurrentTime;