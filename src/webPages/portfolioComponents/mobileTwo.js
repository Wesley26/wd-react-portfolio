import React, { useState } from 'react'
import { noImage } from '../contentMaster/PageContents.js'
import {        
        reactJSLogo,
        m2Link,
        portfolioTextMobile1 } from '../contentMaster/PortfolioPageContents.js'
import {useTransition, animated} from 'react-spring'

const MobileTwo = () => {

    /**
     * hoverOver - boolean to determine if the mouse is hovering over portfolio item.
     * setHoverOver - sets the hoverOver constant value
     * 
     * visibleTransitions - animates the paragraph JSX element (the clickable link description)
     */

    const [hoverOver, setHoverOver] = useState(false);

    const visibleTransitions = useTransition(hoverOver, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return(
        <div 
            onMouseEnter={() => setHoverOver(!hoverOver)}
            onMouseLeave={() => setHoverOver(false)}
            className="m-3 p-3 h-64 w-20long flexbox">

                <div className="bg-mobile-two bg-center h-full w-full">

                    <div>
                        {
                            hoverOver && visibleTransitions.map(({item, key, props}) => 
                            item &&
                            <animated.img
                                key = {key}
                                style = {props}
                                className="ml-24 mr-20 p-1 h-2/5 w-2/5" src={reactJSLogo} alt={noImage}>
                            </animated.img>
                            )
                        }
                        { 
                            hoverOver && visibleTransitions.map(({item, key, props}) => 
                            item &&
                            <animated.p
                                key = {key}
                                style = {props}
                                className="font-title bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-gray-200 text-center font-medium w-11long px-1 ml-16">
                                <a href={m2Link}>{portfolioTextMobile1.subtitleP3_2}</a>
                            </animated.p>
                            )
                        }
                    </div>

                </div>

        </div>
    );
};

export default MobileTwo;