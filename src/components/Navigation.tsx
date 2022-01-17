import { FC, useState } from 'react'
import NavigationMenu from './NavigationMenu'
import NavigationMenuD from './NavigationMenuD';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";

const Navigation:FC = () => {
   
    const [showMenu, setShowMenu] = useState<boolean>(false);

    interface NAV_ANIMATIONS {
        initialStyle: object,
        animateStyle: object,
        transitionStyle: object,
    };

    const navAnimations: NAV_ANIMATIONS = {

        initialStyle: { x: -100, y: 0, opacity: 0 },
        animateStyle: { x: 0, y: 0, opacity: 1 },
        transitionStyle: { style: "spring", stiffness: 100 },

    };

    return (
        <nav>
            <span className="font-body mr-3 pt-3 pb-3 pr-3 pl-12 absolute right-0 float-right text-l">
                <div className="flex flex-row-reverse">
                    <div className="pl-6 pt-3 pb-4 border-solid border-l-2 border-black h-20">
                        <FontAwesomeIcon 
                            icon={faBars}
                            className="mr-2 p-2 text-5xl hover:bg-gray-200 hover:opacity-75 active:bg-gray-400"
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    </div>
                </div>
                <div className="invisible hidden h-auto sm:pt-1 sm:visible sm:flex sm:flex-1 sm:justify-center sm:items-center">
                    <NavigationMenuD />
                </div>
            </span>
            { showMenu ? (
                <motion.div 
                    initial={navAnimations.initialStyle}
                    animate={navAnimations.animateStyle}
                    transition={navAnimations.transitionStyle}
                    className="bg-header_blue p-3 border-solid border-4 border-gray-400 bg-header-blue fixed top-0 left-0 w-2/5 h-full z-50 shadow-lg overflow-auto"
                >
                    
                    <NavigationMenu 
                        closeMenu={() => setShowMenu(false)}
                    />
                </motion.div>
            ) : null }
        </nav>
    );
};

export default Navigation;