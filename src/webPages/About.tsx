import { FC } from 'react'
import PageContents from './contentMaster/PageContents';

const About:FC = () => {

    const pageContents = PageContents();

    return (
        <div className="font-body bg-body_lightGray m-6 shadow-xl">
            <div className="text-left p-6">
                <div className="lg:flex lg:justify-evenly">

                    <div className="left-0 p-3">
                        <img className="shadow-lg" src={pageContents.allImages.aboutMePhoto} alt={pageContents.noImage}></img>
                    </div>
                    <div className="md:pl-6 font-title text-xl right-0 p-3">
                        <h1 className="pb-6 font-bold text-3x1 text-center">
                            {pageContents.aboutTextTitle}
                        </h1>
                        <br>
                        </br>
                        <div>
                            <div className="grid grid-rows-2 grid-cols-1">
                                <p className="font-body text-md">
                                    {pageContents.aboutText.mainParagraphA_1}
                                </p>
                                <p className="font-body text-md">
                                    {pageContents.aboutText.mainParagraphA_2}
                                </p>
                                <p className="pt-16 font-body text-md text-center">
                                    {pageContents.aboutText.mainParagraphA_3}
                                </p>
                            </div>
                            <br>
                            </br>
                            <div className="md:ml-12 md:mr-12 lg:ml-36 lg:mr-36 xl:ml-48 xl:mr-48 grid grid-flow-col">
                                <div className="p-3 flex rounded-full justify-center hover:bg-gray-200 active:bg-gray-400">
                                    <a href={pageContents.githubLink} rel="noreferrer" target="_blank">
                                        <img 
                                            src={pageContents.allImages.githubLogo} 
                                            alt={pageContents.noImage}
                                            className="focus:outline-none">
                                        </img>
                                    </a>
                                </div>
                                <div className="p-3 flex rounded-full justify-center hover:bg-gray-200 active:bg-gray-400">
                                    <a href={pageContents.linkedInLink} rel="noreferrer" target="_blank">
                                        <img 
                                            src={pageContents.allImages.linkedInLogo} 
                                            alt={pageContents.noImage}
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