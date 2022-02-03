import { createContext, ReactElement } from "react";

/**
 * @PortfolioDisplayContext - create Context for Portfolio
 * card, see ./src/webPages/portfolioComponents
 * 
 * @param portfolioSetter - number value determining current
 * displayed portfolio item, index of the portfolioChildList
 * @param setPortfolioSetter - sets portfolioSetter
 * @param portfolioChildListMemo - contains all portfolio Items (memoized in useMemo hook)
 * @param animationValue - a number value to compare to portfolioSetter
 */

export type PORTFOLIO_SETTER = {
    portfolioSetter: number,
    setPortfolioSetter: (pSetter: number) => void,
    portfolioChildListMemo: Array<ReactElement>,
};

export let PortfolioDisplayContext = createContext<PORTFOLIO_SETTER>({

    portfolioSetter: 0,
    setPortfolioSetter: () => {},
    portfolioChildListMemo: [],

});