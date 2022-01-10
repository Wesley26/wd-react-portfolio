import { FC, ReactElement, useRef, useState } from 'react';
import PortfolioPageContents from './portfolioComponents/PortfolioPageContents';
import PortfolioCard from './portfolioComponents/PortfolioCard';
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

    const portfolioPageContents = PortfolioPageContents();
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
        <div className="font-body bg-body-lightGray m-6 overflow-auto shadow-xl">
            <div className="text-left p-6">
                <div className="flex justify-evenly">

                    <div className="left-0 p-3">
                        
                        <div className="text-lg p-6 text-center">
                            <p>
                            {portfolioPageContents.portfolioRepoForThisSite.pRFTS1_1}
                                <a 
                                    href={portfolioPageContents.portfolioRepoForThisSiteLink}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="p-3 rounded-full flex justify-center md:ml-48 md:mr-48 lg:ml-20long lg:mr-20long hover:bg-gray-200 active:bg-gray-400">
                                    {portfolioPageContents.portfolioRepoForThisSite.pRFTS1_2}
                                </a>
                            </p>
                            <p className="pt-3">
                                {portfolioPageContents.portfolioRepoForThisSite.pRFTS1_3}
                            </p>
                            <p className="pb-3">
                                {portfolioPageContents.portfolioRepoForThisSite.pRFTS1_4}
                            </p>
                            <p className="pb-3">
                                {portfolioPageContents.portfolioRepoForThisSite.pRFTS1_5}
                            </p>
                        </div>

                        <div ref={portfolioNavRef} />

                        <PortfolioDisplayContext.Provider value={{ portfolioSetter, setPortfolioSetter, portfolioChildList }}>

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