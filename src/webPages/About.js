import React from 'react'
import { noImage, aboutText } from './contentMaster/PageContents.js'

function About(){
    return (
        <div className="bg-gray-100 m-6">
            <div className="text-left p-6">
                <div className="md:flex md:justify-evenly lg:flex lg:justify-evenly xl:flex xl:justify-evenly">

                    <div className="left-0 p-3">
                        <img src={require("../images/WesleyP18_V2.jpg")} alt={noImage}></img>
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
                            <div className="md:ml-12 md:mr-12 lg:ml-36 lg:mr-36 xl:ml-48 xl:mr-48 grid grid-flow-col">
                                <div className="p-3 flex rounded-full justify-center hover:bg-gray-300">
                                    <a href={`https://github.com/Wesley26`}>
                                        <img 
                                            src={require("../images/GitHub-Mark-120px-plus.png")} 
                                            alt={noImage}
                                            className="focus:outline-none">
                                        </img>
                                    </a>
                                </div>
                                <div className="p-3 flex rounded-full justify-center hover:bg-gray-300">
                                    <a href={`https://www.linkedin.com/in/wesleydzitzer/`}>
                                        <img 
                                            src={require("../images/linkedin-logo.png")} 
                                            alt={noImage}
                                            className="focus:outline-none">
                                        </img>
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