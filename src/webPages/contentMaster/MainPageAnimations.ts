import { MAIN_PAGE_ANIMATIONS } from "../../globalTypes/interfaces/animationInterfaces/MainPageAnimations";

/**
 * @returns MainPageAnimations component for Framer Motion custom hook
 */

const MainPageAnimations = () => {

    const mainPageAnimations: MAIN_PAGE_ANIMATIONS = {

        initialStyle: { x: 0, y: -20, opacity: 0 },
        animateStyle: { x: 0, y: 0, opacity: 1 },
        transitionStyle: { style: "spring", stiffness: 100 },

    };

    return mainPageAnimations;
};

export default MainPageAnimations;