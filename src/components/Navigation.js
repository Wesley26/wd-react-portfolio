import React, { useState } from 'react'
import NavigationMenu from './NavigationMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'


function Navigation() {
    
    /*
    Conditional rendering
    showMenu - Menu variable in hook.
    setShowMenu - Sets the useState from false to true and vice versa.
    maskTransitions - Constant variable for mask transitions, mask behind actual menu.
    menuTransitions - Constant variable for menu transitions, actual menu content.

    NavigationMenu takes a prop called closeMenu, See NavigationMenu.js
    */
   
    const [showMenu, setShowMenu] = useState(false);

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    });

    return (
        <nav>
            <span className="p-3 absolute right-0 float-right text-l">
                <FontAwesomeIcon 
                    icon={faBars}

                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                ) 
            }
            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="p-3 border-solid border-gray-500 bg-gray-300 fixed top-0 left-0 w-2/5 h-full z-50 shadow"
                    >
                        <NavigationMenu 
                            closeMenu={() => setShowMenu(false)}
                        />
                    </animated.div>
                ) 
            }
        </nav>
    );
};

export default Navigation