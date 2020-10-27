import React from 'react'
import { noImage, 
        wd_About_Photo, 
        githubLogo,
        linkedInLogo, 
        aboutText } from './contentMaster/PageContents.js';

function About(){
    return (
        <div className="font-body bg-gray-100 m-6 shadow-xl">
            <div className="text-left p-6">
                <div className="lg:flex lg:justify-evenly">

                    <div className="left-0 p-3">
                        <img className="shadow-lg" src={wd_About_Photo} alt={noImage}></img>
                    </div>
                    <div className="md:pl-6 font-title text-xl right-0 p-3">
                        <h1 className="font-bold text-3x1 text-center">
                            {aboutText.titleA}
                        </h1>
                        <br>
                        </br>
                        <div>
                            <p className="font-body text-md">
                                {aboutText.mainParagraphA}
                            </p>
                            <br>
                            </br>
                            <div className="md:ml-12 md:mr-12 lg:ml-36 lg:mr-36 xl:ml-48 xl:mr-48 grid grid-flow-col">
                                <div className="p-3 flex rounded-full justify-center hover:bg-gray-300 active:bg-gray-500">
                                    <a href={`https://github.com/Wesley26`}>
                                        <img 
                                            src={githubLogo} 
                                            alt={noImage}
                                            className="focus:outline-none">
                                        </img>
                                    </a>
                                </div>
                                <div className="p-3 flex rounded-full justify-center hover:bg-gray-300 active:bg-gray-500">
                                    <a href={`https://www.linkedin.com/in/wesleydzitzer/`}>
                                        <img 
                                            src={linkedInLogo} 
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
            <div className="pb-6">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    );
};

export default About