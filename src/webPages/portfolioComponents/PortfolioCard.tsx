import { FC, useContext } from 'react';
import { PortfolioDisplayContext } from '../../hooks/PortfolioDisplayContext';

const PortfolioCard:FC = () => {

    const { portfolioSetter, portfolioChildListMemo } = useContext(PortfolioDisplayContext);
    const portfolioItem = portfolioChildListMemo[portfolioSetter];
    
    return <div className="px-3 py-12 flex"> <>{portfolioItem}</> </div>
    
};

export default PortfolioCard;