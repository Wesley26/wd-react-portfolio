import React, { useState } from 'react'
import { noImage, portfolioText } from '../contentMaster/PageContents.js'
import {useTransition, animated} from 'react-spring'

function ProjectOne() {

    /**
     * hoverOver - boolean to determine if the mouse is hovering over portfolio item.
     * setHoverOver - sets the hoverOver constant value
     * 
     * visibleTransitions - animates the paragraph JSX element
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
            className="m-3 p-3 bg-project-one h-48 w-4/5 flexbox justify-items-auto">

            <img className="ml-16 mr-12 p-1 h-2/5 w-2/5" src={require("./C++Logo.png")} alt={noImage}></img>

            { 
                hoverOver && visibleTransitions.map(({item, key, props}) => 
                item &&
                <animated.p
                    key = {key}
                    style = {props}
                    className="bg-gray-600 text-gray-200 text-center font-medium w-48">
                    <a href={`https://github.com/Wesley26/ShoppingCart`}>{portfolioText.subtitle1}</a>
                </animated.p>
                )
            }

        </div>
    );
};

export default ProjectOne;