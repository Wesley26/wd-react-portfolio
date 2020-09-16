import React from 'react'
import { portfolioText } from './contentMaster/PageContents.js'

function Portfolio() {
    return (
        <div className="bg-gray-100 m-6">
            <div className="text-left p-6">
                <div className="flex justify-evenly">

                    <div className="left-0 p-3">
                        <h3 className="p-3 text-center font-bold">
                            {portfolioText.titleP}
                        </h3>

                        <div className="grid grid-cols-3 grid-rows-3 gap-4 justify-items-auto">
                            <div className="bg-gray-300 flex justify-center items-center">
                                1
                            </div>
                            <div className="bg-gray-500 flex justify-center items-center">
                                2
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center">
                                3
                            </div>
                            <div className="bg-gray-500 flex justify-center items-center">
                                4
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center">
                                5
                            </div>
                            <div className="bg-gray-500 flex justify-center items-center">
                                6
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Portfolio