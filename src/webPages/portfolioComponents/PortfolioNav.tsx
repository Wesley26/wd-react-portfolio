import { FC, useContext, useEffect, useMemo, useState } from 'react';
import { PORTFOLIO_NAV } from '../../globalTypes/interfaces/navInterfaces/PortfolioNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { PortfolioDisplayContext } from '../../hooks/PortfolioDisplayContext';

const PortfolioNav:FC<PORTFOLIO_NAV> = (props:PORTFOLIO_NAV) => {

    const { portfolioSetter, 
            setPortfolioSetter,
            portfolioChildListMemo,
        } = useContext(PortfolioDisplayContext);

    const arrowStylesMemo = useMemo(() => {

        const arrowStyles: Array<string> = [

            `text-gray-600`,
            `text-gray-100`,
        
        ];

        return arrowStyles;

    }, []);

    const [ dynamicArrowStyleL, setDynamicArrowStyleL ] = useState<string>(arrowStylesMemo[0]);
    const [ dynamicArrowStyleR, setDynamicArrowStyleR ] = useState<string>(arrowStylesMemo[0]);

    const runScroll = () => props.scrollRef.current.scrollIntoView();

    useEffect(() => {

        const beginIndex = 0 as number;
        const endIndex = portfolioChildListMemo.length - 1 as number;

        switch (portfolioSetter) {
            case (beginIndex):
                setDynamicArrowStyleL(arrowStylesMemo[1]);
                break;
            
            case (endIndex):
                setDynamicArrowStyleR(arrowStylesMemo[1]);
                break;

            default:
                setDynamicArrowStyleL(arrowStylesMemo[0]);
                setDynamicArrowStyleR(arrowStylesMemo[0]);
                break;
        };

    }, [arrowStylesMemo, portfolioSetter, portfolioChildListMemo]);

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
                    icon={faCaretLeft as IconProp}
                    className={`text-9xl ${dynamicArrowStyleL}`}
                />
            </div>

            <div className="px-12 md:px-44 lg:px-64" />

            <div
                className="p-3 flex rounded-full justify-center hover:bg-gray-400 active:bg-gray-500"
                onClick={() => {
                    if (portfolioSetter < portfolioChildListMemo.length - 1) {
                        setPortfolioSetter(portfolioSetter + 1);
                        runScroll();
                    }
                }}
            >
                <FontAwesomeIcon
                    icon={faCaretRight as IconProp}
                    className={`text-9xl ${dynamicArrowStyleR}`}
                />
            </div>
        </>
    );
    
};

export default PortfolioNav;