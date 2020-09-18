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
                        <div>
                            <p>
                                {aboutText.mainParagraphA}
                            </p>
                            <br>
                            </br>
                            <div className="ml-48 mr-48 grid grid-flow-col">
                                <div>
                                    <a href={`https://github.com/Wesley26`}>
                                        <img src={require("../images/GitHub-Mark-120px-plus.png")} alt={noImage}></img>
                                    </a>
                                </div>
                                <div>
                                    <a href={`https://www.linkedin.com/in/wesleydzitzer/`}>
                                        <img src={require("../images/linkedin-logo.png")} alt={noImage}></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About