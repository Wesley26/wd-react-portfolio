import React from 'react'
import { portfolioRepoForThisSite,
        portfolioRepoForThisSiteLink,
        portfolioTextWeb1, 
        portfolioTextPersonal1 } from './contentMaster/PageContents.js'

import ProjectOne from './portfolioComponents/projectOne.js'
import ProjectTwo from './portfolioComponents/projectTwo.js'
import ProjectThree from './portfolioComponents/projectThree.js'
import WebsiteOne from './portfolioComponents/websiteOne.js'
import WebsiteTwo from './portfolioComponents/websiteTwo.js'

const Portfolio = () => {

    /**
     * Note: On JSX div elements line 48 and 61, for every 3 portfolio items added, the CSS class
     * 'lg:grid-rows-1' must increase by one row.
     */

    return (
        <div className="font-body bg-body-lightGray m-6 overflow-auto shadow-xl">
            <div className="text-left p-6">
                <div className="flex justify-evenly">

                    <div className="left-0 p-3">
                        
                        <div className="text-lg p-6 text-center">
                            <p>
                            {portfolioRepoForThisSite.pRFTS1_1}
                                <a 
                                    href={portfolioRepoForThisSiteLink}
                                    className="p-3 rounded-full flex justify-center md:ml-48 md:mr-48 lg:ml-20long lg:mr-20long hover:bg-gray-200 active:bg-gray-400">
                                    {portfolioRepoForThisSite.pRFTS1_2}
                                </a>
                            </p>
                            <p className="pt-3">
                                {portfolioRepoForThisSite.pRFTS1_3}
                            </p>
                            <p className="pb-3">
                                {portfolioRepoForThisSite.pRFTS1_4}
                            </p>
                        </div>
                        
                        <h3 className="font-title text-xl p-3 text-center font-bold">
                            {portfolioTextWeb1.titleP1}
                        </h3>

                        <div className="grid md:grid-cols-1 md:p-3 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-items-center">
                            <div className="bg-gray-200 flex justify-center items-center h-auto w-auto shadow-lg">
                                <WebsiteOne />
                            </div>
                            <div className="bg-gray-400 flex justify-center items-center h-auto w-auto shadow-lg">
                                <WebsiteTwo />
                            </div>
                        </div>

                        <h3 className="font-title text-xl p-3 text-center font-bold">
                            {portfolioTextPersonal1.titleP2}
                        </h3>

                        <div className="grid md:grid-cols-1 md:p-3 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-items-center">
                            <div className="bg-gray-200 flex justify-center items-center h-auto w-auto shadow-lg">
                                <ProjectOne />
                            </div>
                            <div className="bg-gray-400 flex justify-center items-center h-auto w-auto shadow-lg">
                                <ProjectTwo />
                            </div>
                            <div className="bg-gray-200 flex justify-center items-center h-auto w-auto shadow-lg">
                                <ProjectThree />
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Portfolio