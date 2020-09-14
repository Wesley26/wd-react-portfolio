import React from 'react'
import { homeText } from './contentMaster/PageContents.js'

function Home(){
    return (
        <div className="bg-gray-100 m-6">

            <div className="text-left p-6">
            <div>
                <h3 className="text-center font-bold">
                    {homeText.subHeaderH}
                </h3>
                <br>
                </br>
                <p>
                    {homeText.mainParagraphH}
                </p>
            </div>
            </div>
        </div>
    );
};

export default Home