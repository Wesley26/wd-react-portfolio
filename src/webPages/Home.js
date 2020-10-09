import React from 'react'
import { noImage,
        philly_P,
        philly_L,
        homeText } from './contentMaster/PageContents.js'

function Home(){
    return (
        <div className="bg-gray-100 m-6">

            <div className="p-6">
            <div className="pb-10">
                <h3 className="text-center font-bold">
                    {homeText.subHeaderH}
                </h3>
                <br>
                </br>
                <p>
                    {homeText.mainParagraphH}
                </p>
                <br>
                </br>
                <div>
                    <figure>
                        <img 
                            src={philly_P} 
                            alt={noImage}
                            className="lg:hidden focus:outline-none">
                        </img>
                        <img 
                            src={philly_L} 
                            alt={noImage}
                            className="invisible h-1 w-1 lg:visible lg:h-full lg:w-full focus:outline-none">
                        </img>
                        <figcaption className="text-left">
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