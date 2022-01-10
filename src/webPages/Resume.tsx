import { FC } from 'react';
import PageContents from './contentMaster/PageContents';

const Resume:FC = () => {

    const pageContents = PageContents();
    
    return(
        <div className="font-body bg-body-lightGray m-6 sm:pb-6 shadow-xl">

            <div className="px-5 py-3">
                <div className="text-xl p-3 text-center">
                    <p>
                        {pageContents.resumeText.infoR}
                    </p>
                </div>
                <img 
                    src={pageContents.allImages.resumeImg} 
                    alt={pageContents.noImage}
                    className="focus:outline-none shadow-lg">
                </img>
            </div>
            <div className="pt-3 pb-12 md:ml-64 md:mr-64 lg:ml-64 lg:mr-64 xl:ml-32long xl:mr-32long grid grid-flow-col">
                <div className="text-xl p-3 flex rounded-full justify-center hover:bg-gray-300 active:bg-gray-500">
                    <a href={pageContents.resumeLink} rel="noreferrer" target="_blank">
                        {pageContents.resumeText.downloadR}
                    </a>
                </div>
            </div>

            <div className="sm:visible sm:mb-32long md:hidden">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>

        </div>
    )
};

export default Resume;