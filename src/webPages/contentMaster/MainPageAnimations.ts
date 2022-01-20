/**
 * @returns MainPageAnimations component for Framer Motion custom hook
 */

const MainPageAnimations = () => {

    interface MAIN_PAGE_ANIMATIONS {
        initialStyle: object,
        animateStyle: object,
        transitionStyle: object,
    };

    const mainPageAnimations: MAIN_PAGE_ANIMATIONS = {

        initialStyle: { x: 0, y: -20, opacity: 0 },
        animateStyle: { x: 0, y: 0, opacity: 1 },
        transitionStyle: { style: "spring", stiffness: 100 },

    };

    return mainPageAnimations;
};

export default MainPageAnimations;