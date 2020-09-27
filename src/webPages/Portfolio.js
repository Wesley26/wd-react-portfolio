import React from 'react'
import { portfolioTextWeb1, portfolioTextPersonal1 } from './contentMaster/PageContents.js'

import ProjectOne from './portfolioComponents/projectOne.js'
import ProjectTwo from './portfolioComponents/projectTwo.js'
import ProjectThree from './portfolioComponents/projectThree.js'
import WebsiteOne from './portfolioComponents/websiteOne.js'

function Portfolio() {

    /**
     * Note: On JSX div elements line 22 and 32, for every 3 portfolio items added, the CSS class
     * 'lg:grid-rows-1' must increase by one row.
     */

    return (
        <div className="bg-gray-100 m-6">
            <div className="text-left p-6">
                <div className="flex justify-evenly">

                    <div className="left-0 p-3">
                        <h3 className="p-3 text-center font-bold">
                            {portfolioTextWeb1.titleP1}
                        </h3>

                        <div className="grid md:grid-cols-1 md:p-3 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-items-auto">
                            <div className="bg-gray-300 flex justify-center items-center h-auto w-auto">
                                <WebsiteOne />
                            </div>
                        </div>

                        <h3 className="p-3 text-center font-bold">
                            {portfolioTextPersonal1.titleP2}
                        </h3>

                        <div className="grid md:grid-cols-1 md:p-3 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-items-auto">
                            <div className="bg-gray-300 flex justify-center items-center h-auto w-auto">
                                <ProjectOne />
                            </div>
                            <div className="bg-gray-500 flex justify-center items-center h-auto w-auto">
                                <ProjectTwo />
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center h-auto w-auto">
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