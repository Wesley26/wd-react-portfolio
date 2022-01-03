import { FC } from 'react';
import PageContents from './contentMaster/PageContents';

const Home:FC = () => {

    const pageContents = PageContents();

    return (
        <div className="font-body bg-body-lightGray m-6 shadow-xl">

            <div className="p-6">
                <div className="pb-10">
                    <div className="flex justify-center items-center">
                        <img
                        src={pageContents.allImages.masterLogo}
                        alt={pageContents.noImage}
                        className="focus:outline-none">
                        </img>
                    </div>
                    <h3 className="font-title text-xl text-center font-bold">
                        {pageContents.homeText.subHeaderH}
                    </h3>
                    <br>
                    </br>
                    <p className="text-lg">
                        {pageContents.homeText.mainParagraphH}
                    </p>

                    <br>
                    </br>

                    <div>
                        <figure>
                            <img 
                                src={pageContents.allImages.phillyPort} 
                                alt={pageContents.noImage}
                                className="lg:hidden focus:outline-none shadow-lg">
                            </img>
                            <img 
                                src={pageContents.allImages.phillyLand} 
                                alt={pageContents.noImage}
                                className="invisible h-1 w-1 lg:visible lg:h-full lg:w-full focus:outline-none shadow-lg">
                            </img>
                            <figcaption className="pt-2 text-left">
                                {pageContents.homeText.captionH}
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home