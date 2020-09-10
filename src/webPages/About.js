import React from 'react'

let noImage = "Image has failed to load."; //Image failed to load message.
let aboutText = {
                title: "Hello World! Meet Wesley Dzitzer",
                mainParagraph: `Wesley Dzitzer is a bachelor of science Managment Information Systems graduate from Rowan University
                                since May of 2017. At Rowan University, Wesley studied object oriented programming, web design, and
                                database design. His knowledge of programming languages include C++ and Java. In web design his
                                knowledge includes HTML, CSS, and Java Script. In database design, Wesley is most familiar with SQL. 
                                Wesley's previous work experience includes a PC refresh contract project and one-year technical customer 
                                support position located at southern  New Jersey in the online iGaming casino industry. For more 
                                information, feel free to visit the LinkedIn and GitHub profile links.`
                }; //aboutText object stores the text for entire about page.

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
                            {aboutText.title}
                        </h1>
                        <br>
                        </br>
                        <p>
                            {aboutText.mainParagraph}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About