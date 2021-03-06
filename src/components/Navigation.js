import React, { useState } from 'react'
import NavigationMenu from './NavigationMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'


const Navigation = () => {
    
    /*
    Conditional rendering
    showMenu - Menu variable in hook.
    setShowMenu - Sets the useState from false to true and vice versa.
    maskTransitions - Constant variable for mask transitions, mask behind actual menu.
    menuTransitions - Constant variable for menu transitions, actual menu content.

    NavigationMenu takes a prop called closeMenu, See NavigationMenu.js
    */
   
    const [showMenu, setShowMenu] = useState(false);

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    });

    return (
        <nav>
            <span className="font-body mr-3 pt-3 pb-3 pr-3 pl-12 absolute right-0 float-right text-l">
                <div className="pl-6 pt-3 pb-4 border-solid border-l-2 border-black">
                    <FontAwesomeIcon 
                        icon={faBars}
                        className="mr-2 p-2 text-5xl hover:bg-gray-200 hover:opacity-75 active:bg-gray-400"
                        onClick={() => setShowMenu(!showMenu)}
                    />
                </div>
            </span>
            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="p-3 border-solid border-4 border-gray-400 bg-header-blue fixed top-0 left-0 w-2/5 h-full z-50 shadow-lg overflow-auto"
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