import React from 'react'

import useCurrentTimeForFooter from '../hooks/useCurrentTimeForFooter.js';

const Footer = () => {

    const timeResult = useCurrentTimeForFooter();

    return (
        <div>
            {timeResult}
        </div>
    );
};

export default Footer