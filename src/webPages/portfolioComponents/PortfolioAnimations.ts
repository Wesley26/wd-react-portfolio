import { PORTFOLIO_ANIMATIONS } from "../../globalTypes/interfaces/animationInterfaces/PortfolioAnimations";

/**
 * @returns PortfolioAnimations component for Framer Motion custom hook
 */

const PortfolioAnimations = () => {

    const portfolioAnimations: PORTFOLIO_ANIMATIONS = {

        initialStyle: { x: 0, y: -10, opacity: 0 },
        animateStyle: { x: 0, y: 0, opacity: 1 },
        transitionStyle: { style: "spring", stiffness: 100 },

    };

    return portfolioAnimations;
};

export default PortfolioAnimations;