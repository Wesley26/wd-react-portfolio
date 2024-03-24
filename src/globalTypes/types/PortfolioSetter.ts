import { ReactElement } from "react";

export type PORTFOLIO_SETTER = {
    portfolioSetter: number,
    setPortfolioSetter: (pSetter: number) => void,
    portfolioChildListMemo: Array<ReactElement>,
};