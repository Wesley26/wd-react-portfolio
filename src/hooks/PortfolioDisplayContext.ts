import { createContext } from "react";
import { PORTFOLIO_SETTER } from "../globalTypes/types/PortfolioSetter";

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

export let PortfolioDisplayContext = createContext<PORTFOLIO_SETTER>({

    portfolioSetter: 0,
    setPortfolioSetter: () => {},
    portfolioChildListMemo: [],

});