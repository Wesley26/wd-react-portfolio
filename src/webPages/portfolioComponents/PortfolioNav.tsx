import { FC, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { PortfolioDisplayContext } from '../../hooks/PortfolioDisplayContext';

interface PORTFOLIO_NAV {
    scrollRef: any,
};

const PortfolioNav:FC<PORTFOLIO_NAV> = (props:PORTFOLIO_NAV) => {

    const { portfolioSetter, 
            setPortfolioSetter,
            portfolioChildList,
        } = useContext(PortfolioDisplayContext);

    const runScroll = () => props.scrollRef.current.scrollIntoView();

    return (
        <>
            <div
                className="p-3 flex rounded-full justify-center hover:bg-gray-400 active:bg-gray-500"
                onClick={() => {
                    if (portfolioSetter !== 0) {
                        setPortfolioSetter(portfolioSetter - 1);
                        runScroll();
                    }
                }}
            >
                <FontAwesomeIcon
                    icon={faCaretLeft}
                    className="text-9xl text-gray-600"
                />
            </div>

            <div className="px-12 md:px-44 lg:px-64" />

            <div
                className="p-3 flex rounded-full justify-center hover:bg-gray-400 active:bg-gray-500"
                onClick={() => {
                    if (portfolioSetter < portfolioChildList.length - 1) {
                        setPortfolioSetter(portfolioSetter + 1);
                        runScroll();
                    }
                }}
            >
                <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-9xl text-gray-600"
                />
            </div>
        </>
    );
    
};

export default PortfolioNav;