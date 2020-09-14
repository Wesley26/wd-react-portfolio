import React from 'react'
import { noImage, aboutText } from './contentMaster/PageContents.js'

function About(){
    return (
        <div className="bg-gray-100 m-6">
            <div className="text-left p-6">
                <div className="flex justify-evenly">

                    <div className="left-0 p-3">
                        <img src={require("../images/WesleyP18.jpg")} alt={noImage}></img>
                    </div>
                    <div className="right-0 p-3">
                        <h1 className="font-bold text-3x1 text-center">
                            {aboutText.titleA}
                        </h1>
                        <br>
                        </br>
                        <p>
                            {aboutText.mainParagraphA}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About