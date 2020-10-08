import React from 'react';
import { noImage, resumeText } from './contentMaster/PageContents.js';

function Resume() {
    
    return(
        <div className="bg-gray-100 m-6">

            <div className="p-3">
                <div className="p-3 text-center">
                    <p>
                        {resumeText.infoR}
                    </p>
                </div>
                <img 
                    src={require("./resumeImage/WD_Resume_IMG.png")} 
                    alt={noImage}
                    className="focus:outline-none">
                </img>
            </div>
            <div className="pt-3 pb-12 md:ml-64 md:mr-64 lg:ml-64 lg:mr-64 xl:ml-32long xl:mr-32long grid grid-flow-col">
                <div className="p-3 flex rounded-full justify-center hover:bg-gray-300">
                    <a href={`https://drive.google.com/file/d/1nUh4co4WAaiHz_6Ja6AQJLeiw4Qcy7MA/view?usp=sharing`}>
                        {resumeText.downloadR}
                    </a>
                </div>
            </div>

        </div>
    )
};

export default Resume;