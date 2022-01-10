import { FC, useContext } from 'react';
import { PortfolioDisplayContext } from '../../hooks/PortfolioDisplayContext';

const PortfolioCard:FC = () => {

    const { portfolioSetter, portfolioChildList } = useContext(PortfolioDisplayContext);
    const portfolioItem = portfolioChildList[portfolioSetter];
    
    return <div className="px-3 py-12 flex"> <>{portfolioItem}</> </div>
    
};

export default PortfolioCard;