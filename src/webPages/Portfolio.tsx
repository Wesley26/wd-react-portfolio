import { FC, ReactElement, useRef, useState } from 'react';
import PortfolioCard from './portfolioComponents/PortfolioCard';
import PortfolioHeader from './portfolioComponents/PortfolioHeader';
import PortfolioNav from './portfolioComponents/PortfolioNav';

import { PortfolioDisplayContext } from '../hooks/PortfolioDisplayContext';

import {
    MobileOne,
    MobileTwo,
    ProjectOne,
    RealWorldOne,
    WebsiteOne,
    WebsiteTwo,
    WebsiteThree,
} from './portfolioComponents/portfolioChildren/index';

/**
 * @param portfolioChildList - list all React Element
 * portfolio items in this Array as portfolio page
 * navigation is determined by its length.
 * @returns Portfolio page component
 */

const Portfolio:FC = () => {

    const [portfolioSetter, setPortfolioSetter] = useState<number>(0);
    let portfolioChildList: Array<ReactElement> = [
        /**
         * List each portfolio item component in this Array
         */
        ///////////////REAL WORLD PROJECTS/////////////////////////////
        <RealWorldOne />, //0, (Sketch/Eastman Core Mobile App)
        ///////////////MOBILE APP PROJECTS/////////////////////////////
        <MobileOne />, //1, MobileOne (Weather Utility App)
        <MobileTwo />, //2, MobileTwo (CHOYCES Mobile)
        ///////////////WEBSITE PROJECTS////////////////////////////////
        <WebsiteOne />, //3, WebsiteOne, (Smile Design Website)
        <WebsiteTwo />, //4, WebsiteTwo, (Bit Broker Challenge)
        <WebsiteThree />, //5, WebsiteThree, (wd_vize Challenge)
        ///////////////PERSONAL PROJECTS///////////////////////////////
        <ProjectOne />, //6, ProjectOne, (Karters Discord Bot Project)
    ];

    const portfolioNavRef = useRef<any>(null);

    return (
        <div className="font-body bg-body_lightGray m-6 overflow-auto shadow-xl">
            <div className="text-left p-6">
                <div className="flex justify-evenly">

                    <div className="left-0 p-3">
                        
                        <PortfolioDisplayContext.Provider value={{ portfolioSetter, setPortfolioSetter, portfolioChildList }}>

                            <PortfolioHeader />

                            <div ref={portfolioNavRef} />

                            <div className="flex flex-row justify-center items-center">

                                <PortfolioNav scrollRef={portfolioNavRef} />

                            </div>

                            <div className="py-3" />

                            <div className="flex justify-center items-center bg-gray-300 border-2 rounded-md border-gray-800 shadow-xl">

                                <PortfolioCard />

                            </div>

                        </ PortfolioDisplayContext.Provider>
                        
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Portfolio;