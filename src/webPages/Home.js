import React from 'react'
import { noImage,
        websiteMasterLogo,
        philly_P,
        philly_L,
        homeText } from './contentMaster/PageContents.js'

function Home(){
    return (
        <div className="font-body bg-gray-100 m-6 shadow-xl">

            <div className="p-6">
                <div className="pb-10">
                    <div className="flex justify-center items-center">
                        <img
                        src={websiteMasterLogo}
                        alt={noImage}
                        className="focus:outline-none">
                        </img>
                    </div>
                    <h3 className="font-title text-xl text-center font-bold">
                        {homeText.subHeaderH}
                    </h3>
                    <br>
                    </br>
                    <p className="text-lg">
                        {homeText.mainParagraphH}
                    </p>
                    <br>
                    </br>
                    <div>
                        <figure>
                            <img 
                                src={philly_P} 
                                alt={noImage}
                                className="lg:hidden focus:outline-none shadow-lg">
                            </img>
                            <img 
                                src={philly_L} 
                                alt={noImage}
                                className="invisible h-1 w-1 lg:visible lg:h-full lg:w-full focus:outline-none shadow-lg">
                            </img>
                            <figcaption className="pt-2 text-left">
                                {homeText.captionH}
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home