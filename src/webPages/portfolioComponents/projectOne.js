import React from 'react'
import { noImage, portfolioText } from '../contentMaster/PageContents.js'

function ProjectOne() {
    return(
        <div className="m-3 p-3 bg-project-one h-48 w-4/5 flexbox justify-items-auto">
            <img className="ml-20 mr-12 p-1 h-2/5 w-2/5" src={require("./C++Logo.png")} alt={noImage}></img>
            <p className="bg-gray-600 text-gray-200 text-center font-medium">
                <a href={`https://github.com/Wesley26/ShoppingCart`}>{portfolioText.subtitle1}</a>
            </p>
        </div>
    );
};

export default ProjectOne;